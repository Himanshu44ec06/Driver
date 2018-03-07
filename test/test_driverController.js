"use strict";
const assert = require('assert');
const  driver  =  require('../driverRegistration/model/driver');
const  controller  =  require('../driverRegistration/controller/driverController');


describe('Driver  Controller', ()=>{

    let  joe; //  will  use this  joe for update, delete and  get

    beforeEach((done)=>{
        joe = new driver({ firstName: 'joe',
            lastName: 'last name',
            phoneNumber : 123456789,
            qualification : 'BE',
            licenseNumber : 'BQWE45WEER'
        });

        joe.save().then(()=>{
            done();
        });
    });


    it('Create  New  Driver using controller', (done)=>{
        joe = new driver({ firstName: 'joe 1',
            lastName: 'last name',
            phoneNumber : 123456789,
            qualification : 'BE',
            licenseNumber : 'BQWE45WEER'
        });

        controller.AddNew(joe).then(()=>{
            assert(!joe.isNew);
            done();
        });
    });

    it('Get  Driver using controller', (done) => {

         controller.GetDriver(joe._id).then((rDriver)=>{
             assert(joe._id.toString() === rDriver._id.toString());
             done();
         });
    });

    it('Delete driver using  controller', (done) => {

        controller.Delete(joe._id).then((rDriver) => {

            assert(rDriver.isDelete);
            done();
        });

    });

    it('Update driver using controller', (done) => {
        var  input =  {
            phoneNumber : 8888888888,
            id : joe._id.toString()
        }

        controller.Update(input).then(()=>{
           controller.GetDriver(joe._id).then((uDriver)=>{
               assert(uDriver.phoneNumber === input.phoneNumber);
               done();
           });

        });
    });


});
