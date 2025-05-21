class person{
    constructor(name,age){
        this.age =age;
        this.name =name;
    }

    greet()
    {
        console.log(this.name,this.age)
    }
}
const person1 = new person("sam solomon", 26)
person1.greet();

export default person;