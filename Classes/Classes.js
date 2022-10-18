console.log("Classes");

//Class expression
let User = class{
    sayHi(){
        alert("What's up");
    }
};


//Named Class Expression
let user = class groupClass{
    sayHi(){
        alert(groupClass);
        }
}
new User().sayHi();

