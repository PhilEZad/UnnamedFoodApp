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
        stage('Build') {
            steps {
				sh "docker-compose -f /frontend/Foodlet/Docker-compose.yml up -d"
            }
        }
        stage('Test') {
            steps {
                echo 'TBD'
            }
        }
        stage('Release') {
            steps {
                echo 'TBD'
            }
        }
        stage('Deploy') {
            steps {
                echo 'TBD'
            }
        }
    }
    post {
        always {
            echo 'Post Actions'
        }
    }
}

