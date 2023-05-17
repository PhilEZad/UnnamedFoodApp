pipeline {
    agent any
    
    stages {
        environment {
            withCredentials([string(credentialsId: 'foodlet_firebase_token', variable: 'SECRET')]) { 
                TOKEN = '${SECRET}'
            }
        }

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
        stage('Create docker image') {
            steps {
                sh "docker build -t foodlet ./frontend/Foodlet/"
            }
        }
        stage('Build') {
            steps {
                echo '${TOKEN}'
                sh "docker run foodlet -e action=\"build\" -e token=\"${TOKEN}\""
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

    }
    post {
        always {
            echo 'Post Actions'
        }
    }
}

