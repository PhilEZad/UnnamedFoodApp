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
        stage('Test') {
            steps {
                echo 'Hello world!'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Hello world!'
            }
        }
        }
    }
