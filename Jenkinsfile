pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend/Foodlet'
            args '-u root:root --name foodlet_container --mount src=${env.WORKSPACE},dst=/app/artifacts,type=bind'
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
            echo 'number: ${env.BUILD_NUMBER}'
            echo 'workspace: ${env.WORKSPACE}'
            junit "junit-test-results.xml"
        }
        always {
            echo 'Post Actions'
        }
    }
}

