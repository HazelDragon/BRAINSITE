// This website will be an interactive fanzine, based on a risoprinted zine I am concurrently making for another class.  
//        This is a zine about the movie Little Shop Of Horrors, which will detail various mini-games, interviews and fanart. 

//        INTERACTIVE CHAR BIOS:
//               Audrey 
//               Audrey II - don't feed the plant!! (when you click the website should break a little bit)
//               Seymour 
//               Mushkin 
//               Greek Chorus 

//        CHARACTER INTERVIEWS 
//        TYPES OF FLOWERS SEEN IN THE MOVIE 

//        FANART + INTERACTIVE ANIMATION?? 

//        HISTORY OF PRODUCTION + DEBATES ON ENDINGS 




let songs = ["array of songs"];
let life;
let humans = [human];
let storyArc = ["setup","rising","climax","falling"];
let ending = ["win", "lose"];
let status; 
let luck = Math.random(); 

class human {
    constructor(name, status, songs, morality, hp) {
        this.name = name;
        this.status = status;
        this.songs = songs;
        this.morality = morality; 
        this.hp = hp; 
    }
}


class plant {
    constructor(name, species, status, songs, position, bodyCount, hp, size){
        this.name = name; 
        this.species = species; 
        this.status = status;
        this.songs = songs;
        this.position = (x,y);
        this.bodyCount = bodycount; 
        this.hp = hp;
        this.size = (w,h); 
    }
}


const h1 = new human(seymour,alive,4);
const h2 = new human(audrey,alive,3);
const h3 = new human(mushkin, alive,1)
const h4 = new human(orin,alive,2);
const p1 = new plant(audreyii, "venus fly trap", alive, 4, { x: 0, y: 0 }, {w:100, h:100});


if (songs == "feed me") 
{
    h1.hp -=0.25; 
    p1.hp +=0.25;
}

if (human.hp == 0)
{
    human.status = "dead";
}
else 
{
    human.status ="alive"
}

function feeding(target){
    if (target.status == "alive")
    {
        plant.size.w +=1
        plant.size.h +=1
        plant.hp  += 0.1
    }
}


// function attack(target){
//     if (luck > )
// }


function worldDomination()
{
    if (humans.every(human => human.status == "dead")){
        ending = "bad"
        songs = "dont feed the plants"
    }
    else 
    {
        ending = "good"
    }
}

