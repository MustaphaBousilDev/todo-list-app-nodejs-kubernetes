##--- run image docker on container 
01--docker compose up --build
##--- Run in background:
02--docker compose up -d --build
##--- check status docker 
03--docker ps
04--docker inspect --format='{{.State.Health.Status}}' node-app
 


----------------------------------
01-First deploy pods:
cmd(kubectl apply -f deployment.yaml)
02-Get list of pods for ensuing your pod is running success
cmd(kubectl get pods)
-----------------------------------------------------------------------
NAME                              READY   STATUS    RESTARTS        AGE
-----------------------------------------------------------------------
frontend                          1/1     Running   10 (115s ago)   24d
orders-service-64f8dcb464-pt4hx   1/1     Running   2 (115s ago)    23d
orders-service-64f8dcb464-vs92b   1/1     Running   2 (115s ago)    23d
orders-service-64f8dcb464-znv8g   1/1     Running   2 (115s ago)    23d
test                              1/1     Running   10 (115s ago)   24d
todo-app-6f76b5b4c7-rtrb9         1/1     Running   1 (115s ago)    23h
-----------------------------------------------------------------------
03-minikube addons for suring we have dashboard kubernetes
cmd(minikube addons list | grep dashboard)
--------------------------------------------------------------------
| dashboard                   | minikube | disabled     | Kubernetes
--------------------------------------------------------------------
04-Enable dashboard if it is desabled
cmd(minikube addons enable dashboard)
05-for suring it is enabled 
cmd(minikube addons list | grep dashboard)
------------------------------------------------------------------------------------------
| dashboard                   | minikube | enabled ✅   | Kubernetes                     |
------------------------------------------------------------------------------------------
05-displaying dashboard k8s
cmd(minikube dashboard)
--> it will directly opened in browser



