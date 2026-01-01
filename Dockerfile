############################
# 1- Base image (Build stage)
############################

FROM node:20.19.6-alpine As builder 

WORKDIR /app 

COPY package*.json ./

RUN npm ci --omit=dev   

COPY . .


############################
# 2- Production image (Runtime stage)
############################
FROM node:20.19.6-alpine AS runner

ENV NODE_ENV=production

# Create non-root user (security best practice)
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp

WORKDIR /app 

COPY --from=builder /app /app

# Change ownership to non-root user
RUN chown -R nodeapp:nodeapp /app

# Switch to non-root user
USER nodeapp

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
    CMD node -e "require('http').get('http://localhost:3000/health', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"


CMD ["node", "app.js"]
