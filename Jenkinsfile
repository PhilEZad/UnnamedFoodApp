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
        stage('Build') {
            agent { 
                docker {
                    image 'foodlet'
                    args '-u root:root -v /var/lib/jenkins/workspace/UnnamedFoodApp:/app/artifacts'
                } 
            }
            steps {
                sh "cd /app && ./entrypoint.sh build"
            }
        }
        stage('Test') {
            agent { 
                docker {
                    image 'foodlet'
                    args '-u root:root -v /var/lib/jenkins/workspace/UnnamedFoodApp:/app/artifacts'
                } 
            }
            steps {
                sh "cd /app && ./entrypoint.sh test"
            }
        }
        stage('verify firebase token') {
            when {
                branch 'release'
            }
            agent { 
                docker {
                    image 'foodlet'
                    args '-u root:root -v /var/lib/jenkins/workspace/UnnamedFoodApp:/app/artifacts'
                } 
            }
            steps {
                sh "cd /app && ./entrypoint.sh firebase_check"
            }
        }
        stage('Release') {
            when {
                branch 'release'
            }
            agent { 
                docker {
                    image 'foodlet'
                    args '-u root:root -v /var/lib/jenkins/workspace/UnnamedFoodApp:/app/artifacts'
                } 
            } 
            steps {
                sh "cd /app && ./entrypoint.sh deploy"
            }
        }
    }
    post {
        always {
            echo 'Post Actions'
            junit "tests/**/junit-test-results.xml"
            cobertura coberturaReportFile: 'coverage/cobertura.txt'
        }
    }
}

