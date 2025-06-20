# DevOps CI/CD Pipeline Project

This project demonstrates a complete **CI/CD pipeline** for deploying a Node.js + Express web application using **Docker**, **GitHub Actions**, and **AWS EC2**.

It highlights the essential skills of a Junior DevOps & Technical Content Engineer:
- Working in Linux/Unix environments
- Understanding of the Software Development Lifecycle (SDLC)
- Use of version control (Git + GitHub)
- Containerization with Docker
- Cloud deployment (AWS EC2)
- Automation with GitHub Actions
- Technical documentation and scripting

---

## 🚀 Project Overview

### 📦 Stack
- **Backend**: Node.js + Express
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Cloud Hosting**: AWS EC2 (Ubuntu instance)

### 🔁 CI/CD Pipeline Summary
1. Push code to GitHub (main branch)
2. GitHub Actions builds and pushes Docker image to Docker Hub
3. GitHub Actions SSHes into AWS EC2
4. Docker image is pulled and run on EC2 as a live web app

---

## 📁 Project Structure

```
devops-cicd-pipeline/
├── app/                      # Node.js application
│   ├── index.js              # Express server
│   └── package.json          # App metadata and dependencies
├── Dockerfile                # Container instructions
├── .github/workflows/        # GitHub Actions CI/CD workflow
│   └── deploy.yml
├── scripts/
│   └── deploy.sh             # Manual EC2 deployment script
├── docs/
│   └── architecture.md       # CI/CD diagrams and flow
└── README.md                 # This file
```

---

## ⚙️ Requirements

- Git + GitHub account
- Docker installed locally
- Docker Hub account
- AWS EC2 instance (Ubuntu 20.04)
- SSH access to EC2 (private key in GitHub secret)
- Node.js 18+ (for local testing)

---

## ☁️ Cloud Deployment (AWS EC2 Setup)

1. Create an EC2 instance (Ubuntu) on [AWS Console](https://console.aws.amazon.com/ec2/)
2. Allow inbound HTTP (port 80) in EC2 Security Group
3. SSH into instance and install Docker:

```bash
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
```

4. Upload your `.pem` SSH key and configure GitHub Actions secrets:
   - `EC2_HOST`
   - `EC2_USER` (e.g. `ubuntu`)
   - `EC2_KEY` (your private SSH key content)
   - `DOCKER_USERNAME` and `DOCKER_PASSWORD`

---

## 🔄 GitHub Actions Workflow

The file `.github/workflows/deploy.yml` defines all steps:

- Check out code
- Login to Docker Hub
- Build & push Docker image
- SSH into EC2
- Pull and run the latest Docker container

---

## 🧪 Local Development

```bash
cd app
npm install
node index.js
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠 Manual Deployment (Optional)

Use the `scripts/deploy.sh` to SSH and deploy manually (update IP and image):

```bash
bash scripts/deploy.sh
```

---

## 📚 Documentation

See `/docs/architecture.md` for:
- CI/CD architecture
- Component diagram
- Flow diagram

---

## 🙋 About the Author

This project was built to demonstrate practical DevOps skills with professional documentation and automation. It is intended as a technical portfolio project for Junior DevOps & Technical Content Engineering roles.

