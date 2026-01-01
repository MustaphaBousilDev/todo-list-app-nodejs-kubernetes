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
#01-Create System group named nodeapp
#02-Create a system user named nodeapp and add this user to group nodeapp without password 
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp

WORKDIR /app 

COPY --from=builder /app /app

# Change ownership to non-root user
RUN chown -R nodeapp:nodeapp /app

# Switch to non-root user
USER nodeapp

EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
    CMD node -e "require('http').get('http://localhost:4000/health', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"


CMD ["node", "app.js"]
