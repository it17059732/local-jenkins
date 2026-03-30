pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'it17059732'
        
    }

    stages {

        stage('Build & Push Images') {
            steps {
                sh """
                echo "dckr_pat_auDcZtORqTyNCz_2jd1dtInxt6s" | docker login -u "it17059732" --password-stdin
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
