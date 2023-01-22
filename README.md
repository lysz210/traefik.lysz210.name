# traefik
Project for easy deploy apps

The initial plan was to with Docker Swarm but it's hard to setup for https and after some research it turns out that it requires Consul to handle it correctly so apps will be deployed with docker-compose instead.

There won't be so many apps and don't need replicas and docker-compose can handle it with multiple compose.yml run by compose.sh.

Idealy update of *-compose.yml must be loaded automaticale by a pipeline after the image is pusshed into registry.
