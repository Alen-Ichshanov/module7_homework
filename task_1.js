function inspectObj(obj) {
    for (let key in obj) {
       if (obj.hasOwnProperty(key)){
        console.log(`Ключ: ${key}`);  
        console.log(`Значение: ${obj[key]}`); 
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