// @ts-check
'use strict'


const  mongoose  = require('mongoose');

mongoose.connect('mongodb://192.168.108.181:27017/Driver');
mongoose.connection
    .once('open',()=>{
        console.log('connected with DB');
    })
    .on('error',(err)=>{ console.warn('ERR => ', err)});


beforeEach((done)=>{

    //  truncating  data from  collection  
    //  to have  fresh  data

    const  { drivers,registrationsteps } =  mongoose.connection.collections;

    drivers.drop( ()=>{
             done();
    });


});
