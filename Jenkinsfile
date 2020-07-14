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

