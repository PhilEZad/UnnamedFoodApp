pipeline {
    agent none
    stages {
        stage('Create docker image') {
            agent any
            steps {
                sh "whoami"
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
            agent any
            steps {
                echo 'TBD'
            }
        }
    }
    post {
        always {
        }
    }
}

