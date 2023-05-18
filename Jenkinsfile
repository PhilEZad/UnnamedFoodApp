pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend/Foodlet'
            args '-u root:root --name foodlet_container -v ${env.WORKSPACE}/artifacts/:/app/artifacts/'
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
                sh "cd /app && ./entrypoint.sh firebase_check"
            }
        }
        stage('Build') {
            steps {
                sh "cd /app && ./entrypoint.sh build"
            }
        }
        stage('Test') {
            steps {
                echo "${env.WORKSPACE}"
                sh "cd /app && ./entrypoint.sh test"
                junit "${env.WORKSPACE}/artifacts/**/junit-test-results.xml"
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

