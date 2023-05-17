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
        stage('Create docker image') {
            steps {
                sh "docker build -t foodlet ./frontend/Foodlet/"
            }
        }
        stage('verify firebase-token')
        {
            steps {
                withCredentials([string(credentialsId: 'foodlet_firebase_token', variable: 'SECRET')]) { 
                    sh "docker run foodlet -e action=\"firebase_check\" -e firebase_token=\""
                }
            }
        }
        stage('Build') {
            steps {
                withCredentials([string(credentialsId: 'foodlet_firebase_token', variable: 'SECRET')]) { 
                    sh "docker run foodlet -e action=\"build\" -e firebase_token=\"$SECRET\""
                }
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

