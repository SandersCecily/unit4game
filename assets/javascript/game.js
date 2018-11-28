let hp = 150;
let att = 10;
let incer = 30;
let marsatt = 20;
let marshp = 250;
let jupiatt = 20;
let jupihp = 175;
let venusatt = 15;
let venushp = 175;
let arr=[hp, att];

console.log(arr);
function battle(opphp, oppatt, i, hp, att){
    console.log("You begins the fight at " + hp + " health points and "
    + att + " attack points.");
    console.log("Your opponent begins the fight at " + opphp + " health points and "
    + oppatt + " attack points.");
    for(hp; hp>0; ){
        //if opponent faints first
        if(opphp< 0){
            console.log("You won.");
            break;
        } 
        //if you faint
        else if (hp<0){
            console.log("You lost.");
            break;
        }
        //continue battle
        else{
            opphp= opphp - att;
            console.log("Opponent at : " + opphp + " Health points");
            att = att + i;
            console.log("Your attack is now : " + att + " Attack Points");
            hp = hp-oppatt;
            console.log("You are at : " + hp + " Health points");
        }
    };
    return [hp, att];
};

arr = battle(jupihp, jupiatt, incer, hp, att);
console.log(arr);
arr = battle(venushp, venusatt, incer, arr[0], arr[1]);
console.log(arr);
arr = battle(marshp, marsatt, incer, arr[0], arr[1]);
console.log(arr); 