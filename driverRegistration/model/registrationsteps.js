// @ts-check
'use strict'
//  use to define  registration steps  

const  mongoose  = require('mongoose');
const  schema  =  mongoose.Schema;

const  RegistrationStepSchema =  new schema({
    StepName  :  {  //  Name  of step  to  view  on UI
            type: String,
            require :  [true, 'Step Name is  reuired'],
            validate : {
                validator : function(v) { return  true; },
                message  : 'Step Name is  incorrect  format'
            }
    },
    
    StepType  : {
        type : Number,
        enum:  [
            0, // Optional
            1  // Mandatory
        ],
        default : 1,
        validate : {
            validator : function(v) { 
                return  (v === 0 || v === 1)? true : false ; 
            },
            message  : 'Step Type is  incorrect  format'
        }

    },
    StepTobeCompletedBy  : {
        type : Number,
        enum:  [
            0, // Driver
            1  // BackEnd Process
        ],
        default: 0,
        validate : {
            validator : function(v) { 
                return  (v === 0 || v === 1)? true : false ; 
            },
            message  : 'Step CompletedBy is  incorrect  format'
        }
    },
    Input : [   //  Input  expected  onto step
        {
            InputType :  {
                type: Number,
                enum  : [
                    0, // input type - text  box 
                    1, // checkbox
                    2, // drop down
                    3, // file Upload
                    4  // Object
                ],
                require :  [true, 'Input Type is  required'],
            },
            IsOptional :  {
                type:  Boolean,
                default : false
            },
            DefaultOptions  : []
        }
    ]

});


const  RegistrationStep  =  mongoose.model('registrationstep',RegistrationStepSchema);

module.exports =    RegistrationStep;


