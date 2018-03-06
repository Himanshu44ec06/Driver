// @ts-check
const   assert  = require('assert');
const    RegistrationStep  = require('../../driverRegistration/model/registrationsteps');

describe('Validating  Registration Step Model',()=>{

    it('Validating Model ',(done)=>{
            
        const  registrationStep = new RegistrationStep({
            StepName  : undefined,
            StepType: 2,
            StepTobeCompletedBy : 2
        });

        registrationStep.validate((error)=>{
                //  testing logic to be put here
                done();
        });
        

    });

});