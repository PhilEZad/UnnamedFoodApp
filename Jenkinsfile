pipeline {
    agent none
    stages {
        stage('Create docker image') {
            agent any
            steps {
                sh "docker build -t foodlet ./frontend/Foodlet/"
            }
        }
        stage('verify firebase token') {
            agent {
                docker {
                    image 'foodlet'
                    args '-u root:root -e action=firebase_check'
                }
            }
            steps {
                sh "cd /app && ./entrypoint.sh"
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'foodlet'
                    args '-u root:root -e action=build '
                }
            }
            steps {
                sh "cd /app && ./entrypoint.sh"
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'foodlet'
                    args '-u root:root -e action=test'
                }
            }
            steps {
                sh "cd /app && ./entrypoint.sh"
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
            sh 'whoami'
        }
    }
}

