//console.log("test")
function computerPlay(){
    let rndNumber=Math.floor(Math.random()*3);
    console.log(rndNumber);
    switch(rndNumber){
        case 0:
            cmpChoice="Rock";
            break;
        case 1:
            cmpChoice="Paper";
            break;
        case 2:
            cmpChoice="scissors";
            break;
    }
    //console.log(cmpChoice)

}
computerPlay()