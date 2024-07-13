var obj = {
    names: "bilal",
    age:22,
    web_development :{
        topic1: "html",
        topic2 : "CSS",
        t2:{
            t3: "javascript",
        }
    }
}
var obj2 = {...obj};
obj2.names="ahmed";
console.log(obj);
console.log(obj2);


var obj = {
    names: "bilal",
    age:22,
    web_development :{
        topic1: "html",
        topic2 : "CSS",
        t2:{
            t3: "javascript",
        }
    }
}
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.names="ahmed";
obj2.web_development.t2.t3="script"
console.log(obj);
console.log(obj2);

var ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
var ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

ingredientsListDeepCopy[1].list[0]="apple"
console.log(ingredientsList);

console.log(ingredientsListDeepCopy);


var obj = {
    names: "bilal",
    age:22,
    web_development :{
        topic1: "html",
        topic2 : "CSS",
        t2:{
            t3: "javascript",
        }
    }
}
var obj2 = Object.assign({},obj)
obj2.names= "ahmed"
obj2.web_development.t2.t3="script";
console.log(obj);
console.log(obj2);
