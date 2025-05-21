const person ={
    name:"sam solomon",
    age:25,
    lname:" carmel",
    fullname: function(){
        return this.name + this.lname;
    }
};
console.log(person.fullname());