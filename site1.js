const human = {
    name:['audrey', 'seymour', 'mushnik', 'orin'],     
    status: ['alive','dead'],
    morality:['good','bad'],
    songs: [''],
}

const plant = {
    name: ['audrey ii'], 
    status: ['alive', 'dead'],
}

const plot = {
    arc: ['setup','rising','climax','falling'],
}
;

const imgText = document.querySelectorAll('.img');
imgText.innerText = human.name[0];

const statText = document.querySelector('.stat');
statText.innerText = human.status[0];