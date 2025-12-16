# DevOps-for-Developers

A hands-on repository of Docker and Kubernetes examples, cloud-specific manifests, and small full-stack app demos. Use this repo to practice containerization, orchestration, storage, and provider nuances (AWS, GCP, Azure) with runnable, minimal examples.

## Repository Layout

- devopsprojects/

  - FullStackDockerContainer/
    - [docker-compose.yml](devopsprojects/FullStackDockerContainer/docker-compose.yml) — full-stack (frontend + backend) via Compose
    - backend/ — Node.js service ([Dockerfile](devopsprojects/FullStackDockerContainer/backend/Dockerfile), [server.js](devopsprojects/FullStackDockerContainer/backend/server.js))
    - frontend/ — Vite/React app ([Dockerfile](devopsprojects/FullStackDockerContainer/frontend/Dockerfile))
  - nodebackend/ — standalone Node.js backend ([Dockerfile](devopsprojects/nodebackend/Dockerfile), [index.js](devopsprojects/nodebackend/index.js))
  - react/ — standalone Vite/React app ([Dockerfile](devopsprojects/react/Dockerfile))

- kubernetes/
  - AKS/ — Azure Kubernetes Service examples
  - EKS/ — AWS EKS examples (e.g., [cluster-autoscaler](kubernetes/EKS/eks/cluster-autoscaler))
  - GKE/ — GCP GKE examples (e.g., [cluster-autoscaler](kubernetes/GKE/GKE/cluster-autoscaler))
  - fullstackapp/ — deployable sample app ([deployment.yaml](kubernetes/fullstackapp/deployment.yaml), [service.yaml](kubernetes/fullstackapp/service.yaml))
  - kubernetes-storage/
    - chapter8_code/ — PV/PVC/Pod storage walkthrough ([pv.yaml](kubernetes/kubernetes-storage/chapter8_code/pv.yaml), [pvc.yaml](kubernetes/kubernetes-storage/chapter8_code/pvc.yaml), [pod.yaml](kubernetes/kubernetes-storage/chapter8_code/pod.yaml))
    - practice/ — PV/PVC/Pod practice set ([pv.yaml](kubernetes/kubernetes-storage/practice/pv.yaml), [pvc.yaml](kubernetes/kubernetes-storage/practice/pvc.yaml), [pod.yaml](kubernetes/kubernetes-storage/practice/pod.yaml))
  - kubernets-dev-pack/ — configmaps, env vars, HPA, requests/limits, secrets
    - chapter7_code/
      - configmaps/ ([deployment.yaml](kubernetes/kubernets-dev-pack/chapter7_code/configmaps/deployment.yaml), [service.yaml](kubernetes/kubernets-dev-pack/chapter7_code/configmaps/service.yaml))
      - environment_vars/ ([deployment.yaml](kubernetes/kubernets-dev-pack/chapter7_code/environment_vars/deployment.yaml))
      - hpa/ ([deployment.yaml](kubernetes/kubernets-dev-pack/chapter7_code/hpa/deployment.yaml))
      - requests-limits/ ([pod.yaml](kubernetes/kubernets-dev-pack/chapter7_code/requests-limits/pod.yaml))
      - secrets/ ([deployment.yaml](kubernetes/kubernets-dev-pack/chapter7_code/secrets/deployment.yaml))
  - notes/ — quick references ([kubectl-commands.md](kubernetes/notes/kubectl-commands.md))
  - pod/ — basic pod/service examples ([pod.yaml](kubernetes/pod/pod.yaml), [service.yaml](kubernetes/pod/service.yaml))

## Quick Start

Prerequisites:

- Docker Engine (with Compose), `kubectl`
- A Kubernetes cluster (minikube/kind or cloud) if you plan to run manifests

### Run the full-stack with Docker Compose

```bash
cd devopsprojects/FullStackDockerContainer
docker compose up --build
# Open the printed URLs in your terminal output (ports depend on app config)
```

### Run the standalone Node backend

```bash
cd devopsprojects/nodebackend
docker build -t nodebackend:local .
docker run --rm -p 3000:3000 nodebackend:local
# Adjust ports if the service listens on a different port in index.js
```

### Run the standalone React app (Vite)

Local dev:

```bash
cd devopsprojects/react
npm install
npm run dev
# Follow Vite's output URL (commonly http://localhost:5173)
```

Docker:

```bash
cd devopsprojects/react
docker build -t reactapp:local .
docker run --rm -p 5173:5173 reactapp:local
# If needed, pass extra flags for Vite host binding
```

### Kubernetes: simple pod

```bash
kubectl apply -f kubernetes/pod/pod.yaml
kubectl get pods
```

### Kubernetes: storage (PV/PVC + Pod)

```bash
kubectl apply -f kubernetes/kubernetes-storage/practice/pv.yaml
kubectl apply -f kubernetes/kubernetes-storage/practice/pvc.yaml
kubectl apply -f kubernetes/kubernetes-storage/practice/pod.yaml
kubectl get pv,pvc,pods
```

### Kubernetes: fullstack sample

```bash
kubectl apply -f kubernetes/fullstackapp/deployment.yaml
kubectl apply -f kubernetes/fullstackapp/service.yaml
kubectl get deploy,svc,pods
```

### Cloud-specific references

- AKS: manifests and notes under [kubernetes/AKS](kubernetes/AKS)
- EKS: see [kubernetes/EKS/eks/cluster-autoscaler](kubernetes/EKS/eks/cluster-autoscaler)
- GKE: see [kubernetes/GKE/GKE/cluster-autoscaler](kubernetes/GKE/GKE/cluster-autoscaler)

## Key Concepts Covered

- Docker: Dockerfiles, multi-stage builds, image layering, caching
- Kubernetes: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, HPA, resources
- Storage: PersistentVolumes, PersistentVolumeClaims, hostPath practice
- Cloud Providers: AKS / EKS / GKE examples and differences

## Contributing

- Keep examples small and focused
- Add a README and usage steps for new examples
- Follow consistent YAML/manifest style
- Open issues for missing topics or improvements

## License

MIT — see LICENSE file.

Pick a folder, follow its README or the commands above, and iterate. Contributions and issue reports are welcome.
