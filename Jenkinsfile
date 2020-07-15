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
            '''
            archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend/frontend-tests/cypress/videos/**', followSymlinks: false
            
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
            '''
            archiveArtifacts allowEmptyArchive: true, artifacts: 'backend/cypress/videos/**', followSymlinks: false
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
            cd performance/
            rm test1.csv -Rf && rm html-reports/ -Rf
            jmeter -n -t cypress/integration/addAClient_performance.jmx -l test1.csv -e -o html-reports/
            '''
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'performance/html-reports', 
                reportFiles: 'index.html', 
                reportName: 'Performance report', 
                reportTitles: ''
                ])

        }
        }




    }
}

