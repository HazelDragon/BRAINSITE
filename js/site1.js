const human = {
    name:['audrey', 'seymour', 'mushnik', 'orin'],     
    status: ['alive','dead'],
    morality:['good','bad'],
    bio: ['a sweet girl with a rugged past', 'a meek guy with a penchant for gardening', 'a hard yet caring boss', 'a sadistic dentist'],
}

const plant = {
    name: ['audrey ii'], 
    status: ['alive', 'dead'],
    bio: ['a mean green mother from outer space'],
}

const plot = {
    arc: ['setup','rising','climax','falling'],
}
;

const songs = [
    'Prologue: Little Shop of Horrors',
    'Skid Row (Downtown)',
    'Da-Doo',
    'Grow for Me',
    'Somewhere Thats Green',
    'Some Fun Now',
    'Dentist!',
    'Feed Me (Git It!)',
    'Suddenly, Seymour',
    'Suppertime',
    'The Meek Shall Inherit',
    'Suppertime II',
    'Suddenly, Seymour (reprise)',
    'Mean Green Mother from Outer Space'
  ];






let i; 
let g;
let h; 
let k;



i = 0;
g = 0; 
h = 0; 
k = 0;



let beginning = false
let end = false; 

const statText = document.querySelectorAll('.stat');
const namText = document.querySelectorAll('.nam');
const bioText = document.querySelectorAll('.bio');
const songText = document.querySelectorAll('.son');



const songDisplay = (first, last) => {
    let songTextD = [];

    if (first >= 0 && last < songs.length) {
        songTextD = songs.slice(first, last + 1);
    }
    songText.forEach((element, index) => {
        if (index < songTextD.length) {
            element.innerText = songTextD[index];
        } else {
            element.innerText = ''; 
    };
});
}







const begText = document.querySelector('.begin');
begText.addEventListener('click',function(event){
beginning = true;
middle = false; 
end = false; 
songDisplay(0,1);
});

const midText = document.querySelector('.middle');
midText.addEventListener('click',function(event){
    beginning = false;
    middle = true;
    end = false;
    songDisplay(6,9);
});

const endText = document.querySelector('.end');
endText.addEventListener('click',function(event){
    beginning = false;
    middle = false;
    end = true;
    songDisplay(9,12);
});



const seyImg = document.querySelector('.sey');
seyImg.addEventListener('click', function(event){
    const namText = document.querySelectorAll('.nam');
    namText.forEach((element,g) => {
        g = 1;
        element.innerText = human.name[g];
    });
    bioText.forEach((element,h) => {
        h = 1;
        element.innerText = human.bio[h];
    });

    if (beginning == true)
    {
        i = 1;
        statText.forEach((element,i) => {
            element.innerText = human.status[i];    
    });
}
});


const audImg = document.querySelector('.aud');
audImg.addEventListener('click', function(event){
    const namText = document.querySelectorAll('.nam');
    namText.forEach((element,g) => {
        g = 0;
        element.innerText = human.name[g];

    });

    bioText.forEach((element,h) => {
        h = 0;
        element.innerText = human.bio[h];
    });



    if (beginning == true)
    {
        statText.forEach((element,i) =>{
            i= 0;
            element.innerText = human.status[i]
        });
      
    }

    if (
        end == true)
    {
        statText.forEach((element,i) =>{
            i= 0;
            element.innerText = human.status[i]
        });
    }
});

const iiImg = document.querySelector('.plan');
iiImg.addEventListener('click', function(event){
    const namText = document.querySelectorAll('.nam');
    namText.forEach((element,g) => {
        g = 0;
        element.innerText = plant.name[g];
    });

    bioText.forEach((element,h) => {
        h = 0;
        element.innerText = plant.bio[h];
    });
});

const oriImg = document.querySelector('.ori');
oriImg.addEventListener('click', function(event){
    const namText = document.querySelectorAll('.nam');
    namText.forEach((element,g) => {
        g = 3;
        element.innerText = human.name[g];
    });

    bioText.forEach((element,h) => {
        h = 3;
        element.innerText = human.bio[h];
    });


    if (beginning == true)
    {
        {
            statText.forEach((element,i) =>{
                i= 0;
                element.innerText = human.status[i]
            });
    }
    }
    else 
    {
        statText.forEach((element,i) =>{
            i= 1;
            element.innerText = human.status[i]
        });
    }
});

const mushImg = document.querySelector('.mush');
mushImg.addEventListener('click', function(event){
    const namText = document.querySelectorAll('.nam');
    namText.forEach((element,g) => {
        g = 2;
        element.innerText = human.name[g];
    });

    
    bioText.forEach((element,h) => {
        h = 2;
        element.innerText = human.bio[h];
    });


    if (beginning == true)
    {
        {
            statText.forEach((element,i) =>{
                i= 0;
                element.innerText = human.status[i]
            });
    }
    }
    else 
    {
        statText.forEach((element,i) =>{
            i= 1;
            element.innerText = human.status[i]
        });
    }
});


























