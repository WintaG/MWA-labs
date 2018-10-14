class Car{
    acceleration = 0;
    constructor(public name:string){}
    honk(){
        console.log(`${this.name} is saying Tooooooooooooooot!`);
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car('BMW');
car.honk();
car.accelerate(60);
console.log(car.acceleration);