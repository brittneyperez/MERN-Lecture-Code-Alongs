class Human { // Class Name must be upercase
    // 1. Define a constructor
    constructor( name, age, hairColor ) {
        this.name = name
        this.age = age
        this.hairColor = hairColor
    }
    // 2. Define a method (a function within a class)
    sayHi() {
        console.log(`你好，我叫名字${this.name}。`)
    }
    /* Functional Programming vs OOP
        ? Functional Programming separates data from functions
        ? OOP is the opposite, it combimes data and functions
    */
}
// 3. Create an instance of this class
const Bri = new Human('codeBri', 22, '咖啡色')
const DanHeng = new Human('丹恒', 23, '黑色')
// console.log(Bri, DanHeng) // ? => Human { name: 'codeBri', hairColor: '咖啡色' } Human { name: '丹恒', hairColor: '黑色' }
// Bri.sayHi() // ? => 你好，我叫名字codeBri。

/* 
    Child Classes extends from—or inherits—things from a Parent Class 
    (i.e., Student Class involves attributes already existing in the Parent: Human Class) 
*/
class Student extends Human{
    constructor(name, hairColor, currentStack){
        super( name, hairColor ) // this is how things are inherited: we declare the attributes we want from the parent class
        this.currentStack = currentStack // for new attributes, we define it as such
    }
    // methods go here
    // introduceYourself() {
    //     console.log(`Hi, my name is ${this.name}. I am ${this.age}-years-old and in the ${this.currentStack} stack.`)
    // }
    
}
const March7th = new Student('三月七', 22, '粉红', 'MERN')
