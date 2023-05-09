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
        stage('Deploy') {
            steps {
                echo 'Hello world!'
            }
        }
       
    }
    post {
        always {
            sh 'docker system prune -a --volumes -f'
            sh 'docker compose ps'
        }
    }
}
