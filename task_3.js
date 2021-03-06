function noProtoObj(name) {
    return Object.create(null);
 }
 
 const testObj = noProtoObj();
 console.log(testObj);