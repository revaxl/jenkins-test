pipeline {
    agent { docker { image 'node:8' } }
    stages {
        stage('test') {
            steps {
                sh 'node -v'
                sh 'npm --version'
            }
        }
    }
}