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
echo 'Application Hotel vue deployed successfully'
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

