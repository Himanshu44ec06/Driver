// @ts-check
'use strict'
//  use to define  registration process

const  mongoose  = require('mongoose');
const  schema  =  mongoose.Schema;

const RegistrationProcessSchema = new schema({

    Process : [ {
            Order  :  {
                type : Number  //  define order  of this step,
            },
            Step  : {
                type: schema.Types.ObjectId,
                ref :  'registrationstep'
            }
    }]

});

const  RegistrationProcess  =  mongoose.model('registrationprocess',RegistrationProcessSchema);

module.exports =    RegistrationProcess;
