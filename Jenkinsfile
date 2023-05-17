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
                sh "docker build -t foodlet ./frontend/Foodlet/"
            }
        }
        stage('verify firebase token')
        {
            steps {
                sh "docker run foodlet -e action=\"firebase_check\" -e firebase_token=\"1//09FDXWImVkzGICgYIARAAGAkSNwF-L9Ir5IS7SHqIvetURTqAhpQ5Dn8UCPpunta4XrlKxfJrUqg7gq7ZfHZ_BCoqUWsg8kBHoiE\""
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

