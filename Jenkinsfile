pipeline{
    agent any
    stages{
    stage('deploy hotel vue'){
        steps{
            sh'''
echo 'Application Hotel vue deployed successfully'
            '''
            }
        }

        stage('Front end tests'){
        steps{
            sh'''
            cd frontend/frontend-tests/
            npm install && npm run mocha
            echo 'tests results'
            pwd
            ls -lart
            '''
             publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'frontend/frontend-tests/mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'Frontend report', 
                reportTitles: ''
                ])
            }
        }

        stage('Back end tests'){
        steps{
            sh'''
            cd backend/
            npm install && npm run mocha
            echo 'tests results'
            pwd
            ls -lart
            '''
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'backend/mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'Backend report', 
                reportTitles: ''
                ])
        }
        }

        stage('performance tests'){
        steps{
            sh'''
echo 'Application Hotel vue deployed successfully'
            '''
        }
        }




    }
}

