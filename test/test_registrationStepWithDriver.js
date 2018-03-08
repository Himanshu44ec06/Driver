'use strict';

const   assert =  require('assert');
const   registrationStep  =  require('../driverRegistration/controller/registrationStepController');
const  calculation  = require('../driverRegistration/model/Calculation');

describe('Registration Step Verfication',()=>{


    let  driver ;
    let  stepName;
    it('Check - Basic Qualification Check - PASS',(done)=>{
        stepName = 'Basic Qualification Check';
        driver =  {
            Age :  18,
            VisaStatus :  'H1'
        };

         registrationStep.RunStep(stepName,driver).then((result)=>{

            assert(result.status);
          done();
        });



    });

});
