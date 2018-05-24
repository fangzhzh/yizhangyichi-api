## kubenates engiens
- `gcloud config list`
- `export PROJECT_ID=yizhangyichi-20180401`
- set project id`gcloud config set project PROJECT_ID`
- create clusters if not

```
	gcloud container clusters create yizhangyichi-cluster \
				--num-nodes 1 \
				--machine-type n1-standard-1 \
				--zone us-central1-a
```

- building docker image 
    + `docker build -t gcr.io/yizhangyichi-20180401/yizhangyichi-api:v1 .`
- push to registry 
    + `gcloud docker -- push gcr.io/yizhangyichi-20180401/yizhangyichi-api:v1`
- if no credentials

```
    gcloud container clusters get-credentials yizhangyichi-cluster --zone us-central1-a
```    
- create pods

- 
```
	kubectl run yizhangyichi-api \
		--image=gcr.io/yizhangyichi-20180401/yizhangyichi-api:dd363fbf11dc \
		--port 3000
```

- Allow external traffic `kubectl expose deployment yizhangyichi-api --type "LoadBalancer"` 
    + check `kubectl get services`
- Scale up your service 
    + `kubectl scale deployment hello-node --replicas=4` 
    + `kubectl get deployment`

- edit docker version 2 
    + `docker build -t gcr.io/yizhangyichi-20180401/yizhangyichi-api:v2 .` 
    + `gcloud docker -- push gcr.io/yizhangyichi-20180401/yizhangyichi-api:v2`
- update deployment 
    + one way: `kubectl edit deployment yizhangyichi-api`
    + another way: `kubectl set image deployment/yizhangyichi-api cloudsql-proxy=gcr.io/cloudsql-docker/gce-proxy:1.11`
- `kubectl get deployments`

- check docker images
    + docker images
    + docker ps

## cloud sql
- [download a private key json](https://cloud.google.com/sql/docs/mysql/connect-kubernetes-engine)
- Create the proxy user
    + `gcloud sql users set-password cloudsqlproxy cloudsqlproxy~% --instance=yizhangyichi-db --prompt-for-password`
- get info
    + `gcloud sql instances describe yizhangyichi-db`
- create secrete
    + `kubectl create secret generic cloudsql-instance-credentials --from-file=credentials.json=$HOME/credentials.json`    
    + `kubectl create secret generic cloudsql-db-credentials --from-literal=username=proxyuser  --from-literal=password='PASSWORD'`

- [add sqlproxy to deplayment.yaml](https://cloud.google.com/sql/docs/mysql/connect-kubernetes-engine)
