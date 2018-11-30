$(function() {
    
    //variables
    let bpearl = $("#blue");                             //blue pearl object
    let ppearl = $("#pink");                             //pink pearl object
    let ypearl = $("#yellow");                            //yellow pearl object
    let gpearl = $("#green");                             //green pearl object
    let counter = 0;                                     //counts player score
    let goal = Math.floor(Math.random()*120) + 19;       //the randomly generated number to get to
    let wins = 0                                         //win counter
    let losses = 0;                                      //loss counter
    let bval = pearlgen();                               //random value of the blue pearl
    let pval = pearlgen();                               //random value of the pink pearl
    let yval = pearlgen();                               //random value of the yellow pearl
    let gval = pearlgen();                               //random value of the green pearl
    
    //adding click event listeners to pearls
    bpearl.click(function(){
        adder(bval, goal, wins, losses);
    });
    ppearl.click(function(){
        adder(pval, goal, wins, losses);
    });
    ypearl.click(function(){
        adder(yval, goal, wins, losses);
    });
    gpearl.click(function(){
        adder(gval, goal, wins, losses);
    });

    //makes a new game
    function newgame (){
        bval = pearlgen();
        pval = pearlgen();
        gval = pearlgen();
        yval = pearlgen();
        goal = Math.floor(Math.random()*120) + 19;
        counter = 0;
    }

    //makes the random values for the pearls
    function pearlgen (){
        let num = Math.floor(Math.random()*12) + 1;
        return num;
    }

    //display the stats
    function displayer(cnt,goal,win,loss){
        $("#counter").text(cnt);
        $("#goal").text(goal);
        $("#win").text(win);
        $("#loss").text(loss);
    }

    //adds with each click
    function adder (val, goal, wins, losses){
        counter=val+counter;
        if (counter>goal){
            losses++;
            displayer(counter,goal,wins,losses);
            newgame();
        }
        else if (counter === goal){
            win++;
            displayer(counter,goal,wins,losses);
            newgame();
        }
        else{
            displayer(counter,goal,wins,losses);
        }
    }

});