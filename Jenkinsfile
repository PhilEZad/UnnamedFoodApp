pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend/Foodlet'
            args '-u root:root --name foodlet_container -v /var/run/docker.sock:/var/run/docker.sock:rw -v /var/jenkins/artifacts/foodlet/:/app/artifacts/'
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
                sh "docker cp foodlet_container:/app/artifacts/ ."
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
            junit "junit-test-results.xml"
        }
        always {
            echo 'Post Actions'
        }
    }
}

