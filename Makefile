GIT_SHA=$(shell git rev-parse HEAD)
IMAGE_VERSION=$(shell ./kubernetes/bin/getdockertag)
PROJECT ?= yizhangyichi-20180401
STACK=yizhangyichi-api

$(info Git Sha: ${GIT_SHA})

$(info Image Version: ${IMAGE_VERSION})

$(info Docker Repository: ${PROJECT})

.PHONY: list

list:   
	echo 'build_image, push_to_docker_hub, deploy'

build_image:
	docker build -t gcr.io/$(PROJECT)/$(STACK):$(IMAGE_VERSION) .

push_to_docker_hub:
	gcloud docker -- push gcr.io/$(PROJECT)/$(STACK):$(IMAGE_VERSION)

deploy: build_image push_to_docker_hub
	./kubernetes/bin/deploy prod $(IMAGE_VERSION)

pure_deploy: 	
	./kubernetes/bin/deploy prod $(IMAGE_VERSION)
