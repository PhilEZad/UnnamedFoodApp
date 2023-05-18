pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend/Foodlet'
            args '-u root:root --name foodlet_container -v /var/jenkins/artifacts/foodlet/:/app/artifacts/'
        }
    }
    stages {
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
                sh "cd /app && ./entrypoint.sh test"
            }
        }
        stage('Release') {
            steps {
                echo 'TBD'
            }
        }
    }
    post {
        success {
            docker cp foodlet_container:/app/artifacts/foodlet/ ${env.WORKSPACE}
            junit "junit-test-results.xml"
        }
        always {
            echo 'Post Actions'
            docker rm -f foodlet_container
        }
    }
}

