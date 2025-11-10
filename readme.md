# DevOps-for-Developers

A compact, hands-on repository of projects and reference examples for containerization, networking, orchestration, and CI/CD across multiple cloud service providers (AWS, GCP, Azure). Use this repo to learn and reproduce practical patterns: Dockerfiles (including multi-stage), bridge & personal networking, YAML manifests, Kubernetes basics, and full-stack deployments with CI/CD pipelines.

## Contents
- Projects:
    - docker/ - Dockerfile examples (single-stage, multi-stage, best practices)
    - networking/ - bridge networks, user-defined networks, host vs bridge examples
    - yaml/ - reusable YAML snippets for Docker Compose and Kubernetes
    - k8s/ - Kubernetes manifests, deployments, services, ingress, configmaps, secrets
    - apps/ - sample full-stack apps (frontend, backend, DB)
    - cicd/ - CI/CD pipeline examples for GitHub Actions, GitLab CI, Jenkins, Azure Pipelines
    - cloud/ - provider-specific notes and examples (AWS ECR/EKS, GCP GCR/GKE, Azure ACR/AKS)
    - docs/ - design notes, cheatsheets, troubleshooting tips

## Quick start
1. Clone the repo:
     git clone <repo-url>
2. Explore a Docker example:
     cd docker && docker build -t sample-app -f Dockerfile .
3. Run compose (example):
     cd docker/compose && docker-compose up --build
4. Apply k8s manifests (minikube/kind/cluster):
     kubectl apply -f k8s/basic-deployment.yaml

## Key Concepts Covered
- Docker:
    - Writing Dockerfiles, image layering, multi-stage builds, caching optimizations
- Networking:
    - Bridge networks, user-defined networks, port mapping, DNS resolution, connecting containers
- YAML:
    - Structure and best practices for Docker Compose and Kubernetes manifests
- Kubernetes:
    - Pods, Deployments, Services (ClusterIP, NodePort, LoadBalancer), Ingress, ConfigMaps, Secrets, RBAC, namespaces
- Full-stack deployment:
    - Deploy frontend + backend + DB, environment configuration, health checks, resource requests/limits
- CI/CD:
    - Pipeline examples: build → test → image publish → deploy
    - Integrations: GitHub Actions, GitLab CI, Jenkins, Azure DevOps
    - Strategies: feature branches, PR validation, blue-green/rolling updates, canary

## CI/CD (high level)
- Build:
    - Build image locally or in pipeline using Docker/Buildx, run unit tests
- Publish:
    - Push to container registry (ECR/GCR/ACR) with proper tagging and credentials
- Deploy:
    - Trigger k8s manifests apply or use Helm/Flux/ArgoCD for GitOps
- Example tools:
    - GitHub Actions: use actions/checkout, docker/build-push-action, kubectl
    - GitLab CI: use docker image, CI_REGISTRY, kubectl
    - Jenkins: declarative pipeline with stages for build/test/publish/deploy

## Folder structure (recommended)
- docker/
    - Dockerfile
    - Dockerfile.multi
    - compose/
- networking/
    - bridge/
    - examples.md
- k8s/
    - namespaces/
    - deployments/
    - ingress/
- apps/
    - frontend/
    - backend/
    - db/
- cicd/
    - github-actions.yml
    - gitlab-ci.yml
    - jenkinsfile
- cloud/
    - aws.md
    - gcp.md
    - azure.md

## Prerequisites
- Docker Engine, docker-compose
- kubectl, a local k8s cluster (minikube / kind) or cloud cluster access
- CLI tools for chosen cloud (aws, gcloud, az)
- CI provider account for remote pipelines

## Contributing
- Keep examples small and focused
- Add README and usage steps for new examples
- Follow consistent YAML/manifest style
- Open issues for missing topics or improvements

## License
MIT — see LICENSE file.

For hands-on walkthroughs, pick a folder and follow its README to run the example. Contributions and issue reports welcome.