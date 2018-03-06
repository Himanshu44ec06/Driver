// @ts-check
'use strict'
//  use to define  registration step  Dal
const  RegistrationStep =  require('../model/registrationsteps');


const  RegistrationStepController  =  (function(){

    var controller =  {};

    //  Currently  not in  use 
    controller.AddNew =  function(RegistrationStep){
            return  RegistrationStep.save();
    }

    controller.GetAll =  function(){
        return  RegistrationStep.find({});
    }

    return  controller;

})();

module.exports  =  RegistrationStepController;