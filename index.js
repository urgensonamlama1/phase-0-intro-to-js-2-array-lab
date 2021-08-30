// Write your solution here!
const cats= ["Milo","Otis","Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
};


function destructivelyPrependCat(){
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(){
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    cats.shift();

};

function  appendCat(name){
    const newCats = [...cats]
    newCats.push(name);
    return newCats;

}

/*
function prependCat(name){
    const newCats = [
        ...cats.slice(0,0),
        "Arnlod",
        ...cats.slice(0),
   
    ];
    
    return newCats;
}
*/

function prependCat(name){
    return [name,...cats];

}


function removeLastCat(){
    const newCats = [
        ...cats.slice(0,2),  
    ];
    return newCats;
    
}

function  removeFirstCat(){
    const newCats = [
        ...cats.slice(1),
       
    ];
    return newCats;


}









