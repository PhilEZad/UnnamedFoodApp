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
    pose {
        always {
            sh 'docker compose down --remove-orphans -v'
            sh 'docker compose ps'
        }
    }
}
