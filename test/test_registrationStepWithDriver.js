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

        registrationStep.GetByName(stepName).then((step)=>{

                if(step){
                        var  isPassed  =  true;
                    for (var i = 0, len = step.Inputs.length; i < len; i++) {

                        var  inputItem  =  step.Inputs[i];

                        console.log('Validating ' + inputItem.InputName);

                        for (var j = 0, jlen = inputItem.PassCriteria.length; j < jlen; j++) {
                            var  criteria  =  inputItem.PassCriteria[j];
                            var isValid  =  calculation[criteria.Function](driver[inputItem.InputName],
                                criteria.CompareValue)

                            console.log('Result of  ' + inputItem.InputName + ' -->' + isValid);

                            if(!isValid){
                                console.log(inputItem.InputName + ' -- Failed');
                                isPassed =  false;
                            }
                        }
                    }
                        assert(isPassed);

                }else {
                    assert.fail('Step  not  Found -- FIX ME ');
                }
                done();
        }).catch((e)=>{
            assert.fail('Step  not  Found -- FIX ME ');
            done();
        });

    });

});
