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
                }
            }
            steps {
                sh "action=firebase_check"
                sh "cd /app && ./entrypoint.sh"
            }
        }
        stage('Build') {
            steps {
                sh "docker run foodlet -e action=build"
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

