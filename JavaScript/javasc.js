// const a=10
// const b="abc"
// const c=true
// console.log(typeof(a),typeof(b),typeof(c))
// object1={
//     "firstname":"St Joseph",
//     "Lastname":"Institute of Technology",
//     "depts":["CSE","IT","ADS","ECE"],
//     "training":"MERN"
// }
// console.log(object1)
// // key may or maynot have quotes
// console.log(object1.depts) // to print a specific key-value
// console.log(object1['training'])
// object2={}
// object2["Firstname"]="Hello"
// object2["Lastname"]="SJIT"
// object2["training"]=["GIT","NODE","Mongodb","HTML","CSS","EXPRESS"]
// console.log("this is object 2 ",object2)
// object3=new Object()
// object3.training="MERN"
// object3.depts=["ADS","CSE","ECE","IT"]
// console.log("this is object 3 ",object3)
// SET
// set=new Set("hello");
// console.log(set);//seperates as character
// set=new Set(["Hello"])
// //the hello can be added using set.add("hello")
// console.log(set)// print as a string

//OPERATORS
/*
Assignment_operators=[=]
unary_operator=[++,--]
Arithmatic_operator=[+,-,*,/,%]
logical_operator=[&&,||,!]
relational_or_condotional_operatior=[>,>=,<,<=,==,===,!=,!==]
bitwise_operator=[&,|,~,^,<<,>>]
combination_of_operators=[+=,-=]
dot_operator=[.]

/*
console.log(5&&10)
console.log(true&&10)
console.log(false&&10)
console.log(false || 10)
console.log(true|| 5)
console.log(5||10)
console.log(false&& true)
console.log(true&&false)
console.log(false||true)
console.log(true||false)
*/
//relational operator


// a='5'
// b=5
// console.log(a==b)
// console.log(a===b)
// for(i of object){
//     console.log(i)
// }
// for(key of Object.entries(object1)){
//     console.log(key,value)
// }


// //tasks - to practice 4 types of functions with or without parameters
// object1={
//     "firstname":"St Joseph",
//     "Lastname":"Institute of Technology",
//     "depts":["CSE","IT","ADS","ECE"],
//     "training":"MERN"
// }
// // 1
// function testFunction(){
//     console.log("this is test function")
// }
// for(key of Object.entries(object1)){
//     console.log(key,value)                                                                                                                                                       .
// }
// testFunction()
// // 2
// function testFunction2(name){
//     console.log("My name is "+name+" .Nice to meet you")
// }
// testFunction2("Ken")
// // 3
// function testFunction3(){
//     return "this is no parameter return"
// }
// console.log(testFunction3())
// // 4
// function testFunction4(a,b){
//     return a*b
// }
// console.log(testFunction4(3,5))