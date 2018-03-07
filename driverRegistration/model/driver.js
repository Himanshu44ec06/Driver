'use strict'

const  mongoose  =  require('mongoose');
const Schema  =  mongoose.Schema;

const  DriverSchema  =  new Schema({

        firstName  : {
            type: String,
            required : [true, 'First Name  is  required'],
            validate : {
                validator : function(v) { return true;},
                message  :  'First Name is not in correct format'
            }
        },

        middleName  : {
            type: String,
           
            validate : {
                validator : function(v) { return true;},
                message  :  'Middle Name is not in correct format'
            }
        },

        lastName  : {
            type: String,
            required : [true, 'Last Name  is  required'],
            validate : {
                validator : function(v) { return true;},
                message  :  'Last Name is not in correct format'
            }
        },

        phoneNumber  : {
            type: Number,
            required : [true, 'Phone Number  is  required'],
            validate : {
                validator : function(v) { return true;},
                message  :  'Phone Number is not in correct format'
            }
        },

        qualification  : {
            type: String,
            required : [true, 'Qualification  is  required'],
            validate : {
                validator : function(v) { return true;},
                message  :  'Qualification is not in correct format'
            }
        },

        licenseNumber : {
            type: String,
            required : [true, 'LicenseNumber  is  required'],
            validate : {
                validator : function(v) { return true;},
                message  :  'LicenseNumber is not in correct format'
            }
        },

        isDelete  : {
            type :  Boolean,
            default : false
        }


});

const  Driver  =  mongoose.model('driver',DriverSchema);

module.exports  =  Driver;

