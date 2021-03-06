function findProp(obj, prop) {
    if (obj.hasOwnProperty(prop)){
      return true;
    }else{
      return false;
    }
 }


let person = {
 name: "Oleg",
 age: 20,
 city: "London",
 favFood: "burger",
 isStudent: true
};

console.log(findProp(person, "age"));
console.log(findProp(person, "lang"));
console.log(findProp(person, "favFoof"));