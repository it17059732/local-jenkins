
pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'your-dockerhub-username'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/it17059732/local-jenkins/tree/main'
            }
        }

        stage('Build & Push Images') {
            steps {
                sh """
                docker build -t $DOCKER_REGISTRY/my-frontend:latest ./frontend
                docker build -t $DOCKER_REGISTRY/my-backend:latest ./backend

                docker push $DOCKER_REGISTRY/my-frontend:latest
                docker push $DOCKER_REGISTRY/my-backend:latest
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                kubectl apply -f k8s/
                """
            }
        }
    }
}
