function Device(brand){
  this.type = "electrical",
  this.voltage = 220,
  this.brand = brand
}

Device.prototype.turnOn = function(){
  this.state = true;
  console.log(`Device is turned ON`);
}

Device.prototype.turnOff = function(){
  this.state = false;
  console.log(`Device is turned OFF`);
}


Device.prototype.calcWatt = function(deviceCurrent){
  if(this.state){
    let power = +deviceCurrent * this.voltage;
    this.power = power;
    console.log(`Calculated power: ${power} W`);
  }else{
    console.log("Turn ON device first.")
  }
}

function AirConditioner(brand, tempLow, tempHigh){
  this.brand = brand,
  this.tempLow = +tempLow,
  this.tempHigh = +tempHigh  
}

AirConditioner.prototype = new Device();

AirConditioner.prototype.setTemp = function(temp){
    if(this.state){
       const deviceTemp = +temp;
        if(deviceTemp > 25){
          let status = "heating";
          console.log(`Air conditioner is currently ${status}`);
        }else{
          let status = "cooling";
          console.log(`Air conditioner is currently ${status}`);
        }
    }else{
      console.log("Turn ON device first.")
  }
}

function Laptop(brand, processorModel, graphicsCard){
  this.brand = brand,
  this.processor = processorModel,
  this.graphics = graphicsCard  
}

Laptop.prototype = new Device();

Laptop.prototype.createNewFolder = function(folderName){
    if(this.state){
       console.log(`New folder with name ${folderName} created`);
    }else{
      console.log("Turn ON device first.")
  }
}

Laptop.prototype.startCalc = function(num1, num2, op){
  if(this.state){
    switch(op){
      case "+":
        let sum = (+num1) + (+num2);
        console.log(`Результат вычисления: ${sum}`);
        break;
      case "-":
          let diff = (+num1) - (+num2);
          console.log(`Результат вычисления: ${diff}`);
          break;
      case "*":
        let mul = (+num1) * (+num2);
        console.log(`Результат вычисления: ${mul}`);
        break;
      case "/":
        if (num1 > num2){
          let div = (+num1) / (+num2);
          console.log(`Результат вычисления: ${div}`);
        }
        break;
      default:
        console.log("Вы ошиблись");
      }
  }else{
   console.log("Turn ON device first.")
}
  }



const myConditioner = new AirConditioner("Samsung", 10, 100);
console.log(myConditioner);
myConditioner.turnOn();
myConditioner.calcWatt(14);
myConditioner.setTemp(30);

const myLaptop = new Laptop("Alienware", "Intel i3-10100F", "NVidia 1050Ti");
console.log(myLaptop);
myLaptop.turnOn();
myLaptop.createNewFolder("Project Green");
myLaptop.startCalc(6, 3, "+");

myConditioner.turnOff();
myConditioner.calcWatt(12);