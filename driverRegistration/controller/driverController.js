'use strict'
//  use to define  registration step  Dal
const  Driver =  require('../model/driver');

const  DriverController  = (function(){

var controller  = {};

controller.AddNew =  (driver) => {
        return  driver.save();
}

controller.GetDriver  = (driverId) => {
    return  Driver.findOne({_id : driverId});
}

controller.Delete = (driverId) =>{
    return  Driver.findOne({_id: driverId})
    .then((driver)=>{
        if(driver) {
            driver.isDelete =  true;
            return  driver.save();
        }
    });
}

controller.Update  =  (driver) => {

    return  Driver.findOne({ _id :  driver.id})
        .then((driverToUpdate)=>{
             return   driverToUpdate.update(driver)

        });
}


return  controller;


})();


module.exports  =  DriverController;
