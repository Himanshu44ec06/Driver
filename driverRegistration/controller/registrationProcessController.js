'use strict'
//  use to define  registration step  Dal
const  RegistrationProcess =  require('../model/registrationprocess');

const  RegistrationProcessController  =  (function(){

    var controller =  {};

    controller.Add =  function(registrationProcess){
        return RegistrationProcess.remove({}).then(()=>{
           return registrationProcess.save();
         });
    };

    controller.GetAll =  function(){
        return  RegistrationProcess.find({});
    }

    return  controller;

})();

module.exports  =  RegistrationProcessController;