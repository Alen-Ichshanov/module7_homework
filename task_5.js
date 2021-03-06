class Device{
    constructor(brand){
      this.type = "electrical";
      this.voltage = 220;
      this.brand = brand;
    }
    
    turnOn() {
      this.state = true;
      console.log(`Device is turned ON`);
    }
    
    turnOff() {
      this.state = false;
      console.log(`Device is turned OFF`);
    }
    
    calcWatt(deviceCurrent) {
      if(this.state){
        let power = +deviceCurrent * this.voltage;
        this.power = power;
        console.log(`Calculated power: ${power} W`);
      }else{
        console.log("Turn ON device first.")
      }
    }
    }
    
   class AirConditioner extends Device {
     constructor(tempLow, tempHigh, brand){
      super(brand);
      this.tempLow = +tempLow,
      this.tempHigh = +tempHigh  
     }
     
     setTemp(temp) {
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
   }
  
  
    class Laptop extends Device {
      constructor(processorModel, graphicsCard, brand){
        super(brand);
        this.processor = processorModel;
        this.graphics = graphicsCard;
      }
      
      createNewFolder(folderName){
        if(this.state){
           console.log(`New folder with name ${folderName} created`);
        }else{
          console.log("Turn ON device first.")
        }
      }
      
      startCalc(num1, num2, op) {
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
    }
    
  
    
    const myConditioner = new AirConditioner(10, 100, "Samsung");
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
    