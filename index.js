/*console.log("Hello");
var promp=require("prompt-sync")({sigint:true});

var msg=prompt("inpupt your name: ");
console.log("Hi : ", msg);
*/

/*calculations
console.log(x);
var a = 5;
var y = 6;
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(Math.pow(a, b));
*/

//------------------------------------------------

//Conditional Statements
/*var m = prompt("input yout mark: ");
switch(m)
{
    case 75:
        console.log("Very Good");
        break;
    case 60:
    case 50:
        console.log("pass");
        break;
    default:
        console.log("invalide");
        break
}

/*var mark = prompt("input your mark");
if(m >= 0 && m <= 100)
{
    if(m >= 75)
    {console.log("Very good");}
    else if (x >= 50)
    {console.log("Pass");}
    else
    {console.log("fail");}
 }else
 {console.log("Invalide value");}

 */

 /*for(var i = 1; i <= 5; i++)
 {
    console.log(i);
 }

 var j = 5;
 while(j >= 1)
 {
    console.log("J: ", j);
    j--;
 }

 var myCars = ["BMW", "Mazda", "Ford"];
 for(var i = 0; i < myCars.length; i++)
 {
    if (myCars[i] == "Mazda")
    {break;}
    console.log(myCars[i]);
 }
    */

 //function

/* function myFun1()
    {
        console.log("Hello from myFun1");
    }
    //myFun1()

    function myfun2()
    {
        return "Hello from myFun1";
    }

    var v = myfun2();
    console.log(v);

    function myfun3(a,b)
    {
        return a + b;
    }

    var v2 = myfun3(5, 6);
    console.log(v2);
    */
   //----------------------------------------

   /*var s1 = "Mohammed";
   console.log(s1.length);

   for(var i = 0; i < s1.length; i++)
   {
    console.log(s1.charAt(i));
   }
    */

   /*var str = "How are you doing?";
   let part1 = str.slice(5, 8);
   console.log(part1);

   let part2 = str.substring(4, 8);
   console.log(part2);

   var strArr = str.split(" ");
   console.log(strArr.length);
   for(var i = 0; i < strArr.length; i++)
   {
    console.log(strArr[i]);
   }*/


    //------------------------
    //lower case and upper case

   /*var strUpper = str.toUpperCase();
    console.log(strUpper);

    var strLower = str.toLowerCase();
    console.log(strLower);*/







    //****************************
    //* */
    //13/09/2024
    //Variable substitutions(using.back quote)
    /*let fn = "liz";
    let ln = "cruz";
    let fullName = 'welcome ${fn}, ${ln}!';
    console.log(fullName);
    //--------------------------------------
    let price = 10;
    let tax = 0.25;
    let total = ''
    //---------------------------------------
    //for...of loop
    const arr = [10, 20, 30];
    for(let v of arr){console.log(v)};
    //---------------------------------------

    //arrow function
    //normal function
    /*function myFun(){console.log("Hello");}
    myFun();

    function myFun2(a) {return a+2;}
    var v = myFun2(3);
    console.log(v);*/

    //assign function to variable
    /*var hello = function() {console.log("1: Hello World!");}
    hello();
    hello = function() {return "2: Hello World!";}
    console.log(hello());*/

    //we cant use arrow function non-return function
    //because the value of variable will be undefind.
    
    /*var hello = () => {console.log("temp: Hello World!");}
    console.log(hello());

    hello = () => {return "3: Hello World!";}
    console.log(hello());*/

    //arrow fun with return value : there is no needs return statment
    /*hello = () => "4: Hello World!";
    console.log(hello());

    //with parameter
    //hello = (val) => "Hello" + val;
    //console.log(hello("Ali"));
    
    //parenthesis could also be removed when therw is only one parameter.
    //hello = val => "Hello " + val;
    //console.log(hello("Mohammed"));

    //Two parameters
    //function add(a, b) {return a+ b;}
    //console.log("Using normal function:" + add(2, 3)); //output 5

    const addArrow = (a, b) => a+ b;
    console.log("Using arrow function: " + addArrow(2, 3)); // output 5

    //Use substitution with arrow function
    let currency = n => '$${n}'
    console.log(currency(80))//$80

    // Spread Operator
    //The JavaScript spread operator (...) allows us to quickly
    //copy all or part of an existing array or object into another array or object.
    /*const arrOne = [1, 2, 3];
    const arrTwo = [4, 5, 6];
    constmarrComb = [...arrOne, ... arrTwo]
    console.log(arrComb) // [1,2,3,4,5,6]
    //the spread operator is often used in combination with destructuring
    const Num = [1,2,3,4,5,6];
    const [v1, v2, ...remain] = Num; //[v1, v2, ... remain] is a collection of variables
    console.log(v1, v2, "-", remain);*/

    // split string
    //var s = "Hello";
    //var arrS= s.plit("");
    //console.log(arrS);
    ///join array
    /*var s2=arrS.join("$");
    console.log(s2);*/

    //spread operator with functions
    //var myArr=[1, 8, 5, 7];
    //const addTwoToFirstItem= ([v1, ...rem]) =>(v1+2);
    //console.log(" adding to myArr: "+addTwoFirstItem(myArr));

    //function capFCI(s) {return s[0].toUpperCase() + s.slice(1);}
    //const capFC2 = ([fl, ...rw]) => fl.toUpperCase() + rw.join("");
    //console.log(capFC2("hello"));

    /////
    //Array.prototype.map
    //The map() method creates a new array by applying
    //a given function to each element of the original array.
    /*var num = [1, 4, 9, 4, 16];
    var newNum1 = num.map((n) => Math.sqrt(n));
    console.log(newNum1);*/

    //const add3=v=>v+3;
    //var newNum2 = num.map((n) => add3(n));
    //console.log(newNum2);
    //-------
    //Array.prototype.filter
    //The filter() method creates a new array containing only
    //elements that satisfy a specified condition
    /*var num2=[12, 5, 8, 130, 44];
    var f1 = num2.filter((val) =>val>=10);
    var f2 = [12, 5, 8, 130, 44].filter((val) =>val>=10);
    console.log(f1);
    console.log(f2);

    //filter with function
    function isBig(v) {return v >= 10;}
    var f3 = [12, 5, 8, 130, 44].filter(isBig);
    console.log(f3);

    // var wordsm= ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    var r = words.filter((w) => w.length > 6);
    //console.log(r);

    ///---------------------
    //The array.prototype.reduce() method is used in an array to return a 
    //single value from an array afeter executing the callback function (like loop) on each element
    //of the array.

    const arrRed = [10, 18, 30, 41, 60];
    const myReducer = (t,e) => t+e; //t is total and e is element

    //10+18+30+41+60
    comsole.log(arrRed.reduce(myReducer)); //159

    // add initialValue for total = 20
    //console.log(arrRed.reduce(myReducer, 20)); //179

    //*********************** */

    /*class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
            //console.log("Hi");
        }

        setName(n) {this.name =n;}
        getName() {return this.name;}

        setAge(a) {this.age =a;}
        getAge() {return this.age;}

        details(){
            var det=this.name + "," + this.age;
            return det;
        }

    }

    const person1 = new Person ("Sara", 30);
    person1.setName("Jordan");
    console.log(person1.name); //Output:Jordan
    console.log(person1.age); //Output: 30

    console.log("Details: " + person1.details());

    //****************************** */
    //Super and Subclass

    /*class Car{
        constructor(brand) {this.brand = brand;}
        setCarName() {return 'I have a ' + this.brand;}
    }
    
    class Model extends Car{
        constructor(brand, model){
            super(brand);
            this.model = model;
        }
        show() {return this.setCarName() + ', it is a ' + this.model;}
    }

    let myCar = new Model("Ford", "Mustang");
    console.log(myCar.show());

    //------------------------------------------------------------------------

    //Exports Modules with functions or variables can be stored in any external File
    //var msg = require("./message.js");
    //








*/



 


