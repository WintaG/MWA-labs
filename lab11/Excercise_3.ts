class Person{
    private _firstname:string;
    enumerable:boolean = true;
    configurable:boolean = true;
    get firstname(){
        return this.firstname;
    }
    set firstname(value:string){
        this.firstname = value;
    }
}
var person = new Person();
person.firstname = "John Doe";
console.log(person.firstname);