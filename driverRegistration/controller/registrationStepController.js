'use strict'
//  use to define  registration step  Dal
const  RegistrationStep =  require('../model/registrationsteps');
const  calculation =  require('../model/Calculation');

const  RegistrationStepController  =  (function(){

var controller =  {};

    //  Currently  not in  use 
    controller.AddNew =  function(registrationStep){
            return  registrationStep.save();
    }

    controller.GetAll =  function(){
        return  RegistrationStep.find({});
    }

    controller.GetByName =  function (stepname) {
         return  RegistrationStep.findOne({StepName :  stepname});
    }


    controller.RunStep =  function (stepname,driver) {
        let returnItem  = {
            status : false,
            message : []
        };

        return  RegistrationStep.findOne({StepName :  stepname}).then((step)=>{

            if(step){
                var  isPassed  =  true;
                for (var i = 0, len = step.Inputs.length; i < len; i++) {
                    var  inputItem  =  step.Inputs[i];
                    for (var j = 0, jlen = inputItem.PassCriteria.length; j < jlen; j++) {
                        var  criteria  =  inputItem.PassCriteria[j];
                        var isValid  =  calculation[criteria.Function](driver[inputItem.InputName],
                            criteria.CompareValue)

                        if(!isValid){
                            returnItem.message.push(inputItem.InputName + ' is  failed');
                            isPassed =  false;
                        }
                    }
                }
                returnItem.status =  isPassed;

            }
            else {
                returnItem.message.push('Step  not  found');
            }

            return Promise.resolve(returnItem);


        });

    }

    return  controller;

})();

module.exports  =  RegistrationStepController;