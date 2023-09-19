

сonst obj = {
    from: 1, 
    to: 10, 
  };
  
  obj.createArr = function () {
    if (this.from <= this.to) {
      this.arr = Array.from({ length: this.to - this.from + 1 }, (_, i) => this.from + i);
      this.arr.sort((a, b) => a - b);
    } else {
      console.error("Wrong range");
    }
  };

const createArrBind = obj.createArr.bind(obj);
console.log(obj.arr);

const createArrCall = obj.createArr.call(obj);
console.log(obj.arr);

const createArrApply = obj.createArr.apply(obj);
console.log(obj.arr);

obj.createArr();  
console.log(obj.arr);



const calculator = {
    result: 0,
    sum(num) {
        this.result += num;
        return this;
    },
    sub(num) {
        this.result -= num;
        return this;
    },
    mul(num) {
        this.result *= num;
        return this;
    },
    div(num) {
        if (num !== 0){
            this.result /= num;
        } else {
            console.log('division on 0');
        }
        return this;
    },
  };
  
  const result = calculator.sum(2).sum(2).mul(4).result;
  console.log (result);
  // 16
  

  function Car(model, color, age, gasTank) {
    this.model = model;
    this.color = color;
    this.age = age;
    this.speed = 0;
    this.gasTank = gasTank;
    this.started = false;
  
    this.startEngine = function () {
      if (this.gasTank > 0) {
        this.started = true;
      } else {
        console.error("Out of gas");
      }
      return this;
    };
  
    this.drive = function () {
      if (this.started && this.gasTank > 0) {
        this.speed = 30;
        this.gasTank -= 1;
      } else {
        console.error("Cannot drive. Make sure the engine is started and there is gas.");
      }
      return this;
    };
  
    this.stop = function () {
      this.started = false;
      this.speed = 0;
      return this;
    };
  
    this.speedUp = function (amount) {
      if (this.started && this.gasTank > 0) {
        this.speed = Math.min(this.speed + amount, 200);
        this.gasTank -= 5;
      } else {
        console.error("Cannot speed up");
      }
      return this;
    };
  
    this.slowDown = function (amount) {
      this.speed = Math.max(this.speed - amount, 0);
      return this;
    };
  
    this.addGas = function (amount) {
      this.gasTank = Math.min(this.gasTank + amount, 20);
      return this;
    };
  }
  
  const myCar = new Car("BMW", "red", 2, 5);
  
  myCar.startEngine().drive().speedUp(20).addGas(5).drive().slowDown(10).stop();
  
  console.log(myCar);
  