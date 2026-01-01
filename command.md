##--- run image docker on container 
01--docker compose up --build
##--- Run in background:
02--docker compose up -d --build
##--- check status docker 
03--docker ps
04--docker inspect --format='{{.State.Health.Status}}' node-app
 