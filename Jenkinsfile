pipeline {
    agent { 
        dockerfile {
            dir 'frontend/Foodlet/'
            label 'foodlet'
        }
    }
    stages {
        stage('Create docker image') {
            steps {
                sh "docker build -t foodlet ./frontend/Foodlet/"
            }
        }
        stage('verify firebase token') {
            steps {
                sh "docker run -e action=firebase_check foodlet"
            }
        }
        stage('Build') {
            steps {
                sh "docker run -e action=build foodlet"
            }
        }
        stage('Test') {
            steps {
                sh "docker run -e action=test foodlet"
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

