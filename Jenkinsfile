
pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'it17059732'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/it17059732/local-jenkins.git'
            }
        }

        stage('Build & Push Images') {
            steps {
                sh """
                docker build -t $it17059732/my-frontend:latest ./frontend
                docker build -t $it17059732/my-backend:latest ./backend

                docker push $it17059732/my-frontend:latest
                docker push $it17059732/my-backend:latest
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
