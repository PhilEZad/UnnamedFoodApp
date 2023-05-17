pipeline {
    agent { 
        dockerfile {
            dir 'frontend/Foodlet/'
        }
    }
    stages {
        stage('verify firebase token') {
            steps {
                sh ls
                sh action="firebase_check"
                sh "./entrypoint.sh"
            }
        }
        stage('Build') {
            steps {
                sh action="build"
                sh "./entrypoint.sh"
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

