'use strict';

//  Need to change name of  this call  as it doesn't  sound  good for its purpose
var  Calculation  = {};

Calculation.GreaterThan =  function (input,compare) {
    return  input > compare;
}

Calculation.GreaterThanEqualTo =  function (input,compare) {
    return  input >= compare;
}


Calculation.LessThan =  function (input,compare) {
    return  input < compare;
}

Calculation.TextInCaseInSensitive =  function (input,string) {
    return  string.toLowerCase().indexOf(input.toLowerCase()) > -1 ?  true :  false;
}

Calculation.TextInArray = function (input,array) {
   return  array.indexOf(input) > -1? true :  false;
}

Calculation.DateComparisionFromToday =  function (input,maxDiff) {
    var dateDiff  = Date.now() -   new Date(input);
}
// Note  When  add  new  function do add  in below  list
Calculation.FunctionList  = {
    'GreaterThanEqualTo' : 'GreaterThanEqualTo',
    'GreaterThan' : 'GreaterThan',
    'LessThan': 'LessThan',
    'TextInCaseInSensitive' :  'TextInCaseInSensitive',
    'TextInArray' : 'TextInArray',
    'DateComparisionFromToday' :  'DateComparisionFromToday'
};

module.exports = Calculation;

