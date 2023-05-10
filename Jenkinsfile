pipeline {
    agent any
    stages {
        stage('Verify Toolset') {
            steps {
                sh '''
                docker version
                docker info
                docker compose version
                curl --version
                jq --version
                '''
            }
        }
        stage('Purge') {
            steps {
                sh 'docker system prune -a --volumes -f'
            }
        }
        stage('Boot Container') {
            steps {
                sh 'docker build -t frontend frontend/Foodlet'
                sh 'docker compose up -d --no-color --wait'
                sh 'docker compose ps'
            }
        }
       
    }
    post {
        always {
            echo 'Post Actions'
        }
    }
}

