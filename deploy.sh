#!/bin/bash
# Basic manual deployment script for EC2

echo "Logging into EC2 and deploying container..."

ssh -i your-key.pem ec2-user@your-ec2-ip << 'ENDSSH'
docker pull your-dockerhub-username/devops-cicd-app:latest
docker stop devops-app || true
docker rm devops-app || true
docker run -d -p 80:3000 --name devops-app your-dockerhub-username/devops-cicd-app:latest
ENDSSH

echo "Deployment complete."
