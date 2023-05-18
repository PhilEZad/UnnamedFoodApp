pipeline {
    agent any

    stages {
        stage('build image')
        {
            agent any
            steps {
                sh "docker build -t foodlet frontend/Foodlet"
            }
        }
        stage('verify firebase token') {
            agent docker {
                image 'foodlet'
                args '-u root:root'
                reuseNode true
            }
            steps {
                sh "cd /app && ./entrypoint.sh firebase_check"
            }
        }
        stage('Build') {
            agent docker {
                image 'foodlet'
                args '-u root:root'
                reuseNode true
            }
            steps {
                sh "cd /app && ./entrypoint.sh build"
            }
        }
        stage('Test') {
            agent docker {
                image 'foodlet'
                args '-u root:root'
                reuseNode true
            }
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
            echo "number: ${env.BUILD_NUMBER}"
            echo "workspace: ${env.WORKSPACE}"
            junit "junit-test-results.xml"
        }
        always {
            echo 'Post Actions'
        }
    }
}

