pipeline {
    agent any
    
    stages {
        stage('Verify Toolset') {
            steps {
                sh '''
                docker version
                docker info
                docker compose version
                curl --version
                jq --version
                '''
            }
        }
        stage('Create docker image') {
            steps {
                sh "docker build -f /app/dockerfile -t foodlet"
            }
        }
        stage('Build') {
            steps {
                sh "docker run foodlet -e action=\"build\""
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

