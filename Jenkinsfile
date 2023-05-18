pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend/Foodlet'
            args '-u root:root -d -t'
        }
    }
    stages {
        //stage('Create docker image') {
        //    agent any
        //    steps {
        //        sh "docker build -t foodlet ./frontend/Foodlet/"
        //    }
        //}
        stage('verify firebase token') {
            steps {
                sh "export action=firebase_check"
                sh "cd /app && ./entrypoint.sh"
            }
        }
        stage('Build') {
            steps {
                sh "export action=build"
                sh "cd /app && ./entrypoint.sh"
            }
        }
        stage('Test') {
            steps {
                sh "export action=test"
                sh "cd /app && ./entrypoint.sh"
                junit "/app/artifacts/tests/**/junit-test-results.xml"
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

