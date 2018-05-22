- `gcloud config list`
- `export PROJECT_ID=yizhangyichi-20180401`
- set project id`gcloud config set project PROJECT_ID`
- create clusters if not

```
	gcloud container clusters create yizhangyichi-cluster \
				--num-nodes 1 \
				--machine-type n1-standard-1 \
				--zone asia-east1-a
```

- building docker image 
    + `docker build -t gcr.io/yizhangyichi-20180401/yizhangyichi-api:v1 .`
- push to registry 
    + `gcloud docker -- push gcr.io/yizhangyichi-20180401/yizhangyichi-api:v1`
- create pods

```
	kubectl run yizhangyichi-api \
		--image=gcr.io/yizhangyichi-20180401/yizhangyichi-api:v1 \
		--port 3000
```

- Allow external traffic `ubectl expose deployment yizhangyichi-api --type "LoadBalancer"` 
    + check `kubectl get services`
- Scale up your service 
    + `kubectl scale deployment hello-node --replicas=4` 
    + `kubectl get deployment`

- edit docker version 2 
    + `docker build -t gcr.io/yizhangyichi-20180401/yizhangyichi-api:v2 .` 
    + `gcloud docker -- push gcr.io/yizhangyichi-20180401/yizhangyichi-api:v2`
- update deployment 
    + `kubectl edit deployment yizhangyichi-api`
- `kubectl get deployments`
- check docker images
    + docker images
    + docker ps
