// @ts-check
'use strict'
//  use to define  registration step  Dal
const  RegistrationStep =  require('../model/registrationsteps');


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

    return  controller;

})();

module.exports  =  RegistrationStepController;