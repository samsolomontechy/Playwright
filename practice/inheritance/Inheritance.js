import person from './base.js'



class grade extends person{
    constructor(name,age,grade){
        super (name,age);
        this.grade =grade;
    }

    result(){
        console.log(this.name);
        console.log(this.grade);
    }
}

const person2 = new grade("sam solomon", 38, 5.7)
person2.result()
person2.greet()