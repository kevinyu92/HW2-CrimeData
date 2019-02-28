var exercise = {};

exercise.countRecords = function(data){
    var numRecords = 0;
    for(i=0;i<data.length;i++){
    var numRecords = data.length;}
    return numRecords;
};

exercise.countDistrictCrimes = function(data,district){
   var districtCount = 0;
   for(i=0;i<data.length;i++){ 
        if(data[i][19] === district){
            districtCount ++
        }}
    return districtCount; 
};

exercise.countPrimaryType = function(data,primaryType){
    var typeCount = 0;
    for(i=0;i<data.length;i++){ 
         if(data[i][13] === primaryType){
             typeCount ++
         }}
     return typeCount; 
};

exercise.countLocation = function(data,location){
    var locationCount = 0;
    for(i=0;i<data.length;i++){ 
         if(data[i][15] === location){
             locationCount ++
         }}
     return locationCount; 
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
       
    //-------------------------------------------    
    // return 'Error: buildLatLngPoint not implemented';
};




