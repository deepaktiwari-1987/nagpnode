# Link of the code repository  
API Service Repo : https://github.com/deepaktiwari-1987/nagpnode  
Kubernetes Service Repo : https://github.com/deepaktiwari-1987/nagpkubernetes  
  
# Docker hub URL for docker images.  
https://hub.docker.com/r/deepdocker1987/nagpnodeapp  
  
# URL for Service API tier to view the records from backend tier.  
http://{SERVICE_EXPOSED_OR_EXTERNAL_IP_URL}/get-all-employees  
  
In my case I have developed this in minikube so to get the host url I have used below command of minikube  
  
minikube service node-app-service —url  
