function inspectObj(obj) {
    for (let key in obj) {
       if (obj.hasOwnProperty(key)){
        console.log(`Ключ: ${key}, значение: ${obj[key]}`);  
       }
  }
}
  
 let person = {
    name: "Oleg",
    age: 20,
    city: "London",
    favFood: "burger",
    isStudent: true
  };
  
  inspectObj(person);