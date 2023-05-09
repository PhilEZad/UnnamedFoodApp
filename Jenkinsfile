pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Build') {
            steps {
                echo 'Hello world!'
                sh 'echo myCustomEnvVar = #myCustomEnvVar'
            }
        }
        stage('Test') {
            steps {
                echo 'Hello world!'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Hello world!'
            }
        }
        }
    }
