function sayHello() {
    console.log("I would like to say hello");
}

setTimeout(() => {
    console.log("I am timer function");
    sayHello();
}, 2000)