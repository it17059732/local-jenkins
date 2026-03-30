pipeline {
    agent any

    environment {
        DOCKERHUB = credentials('dockerhub-creds')  // Use Jenkins stored credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/it17059732/local-jenkins.git'
            }
        }

        stage('Build & Push Images') {
            steps {
                sh """
                echo "$DOCKERHUB_PSW" | docker login -u "$DOCKERHUB_USR" --password-stdin
                docker build -t it17059732/my-frontend:latest ./frontend
                docker build -t it17059732/my-backend:latest ./backend

                docker push it17059732/my-frontend:latest
                docker push it17059732/my-backend:latest
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
