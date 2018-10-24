pipeline {
    agent { docker { image 'node:8-alpine' } }
    stages {
        stage('test') {
            steps {
                sh 'node -v'
                sh 'npm --version'
            }
        }
    }
}