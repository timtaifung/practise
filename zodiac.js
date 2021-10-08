//random function
const selector=input=>{
    let counter=input.length;
    let output=input[Math.floor(Math.random()*counter)];
    return output;
}

// specific action objects
let finance= {
    name: 'finance',
    good: 'the market seems to be in your favor! Keep up the good work',
    bad: 'The market seems to be staganating and going against you, maybe try out something new'
},
family={
    name:'family',
    good:'Relation with your family seems healthy! Keep up the good work, but remember to give yourself some along time as well',
    bad: ' Maybe you should spend more time with your family, Blood is afterall thicker than water'
},
studies={
    name:'studies',
    good:'You are doing well in your studies, keep up the motivation and rive and you will eventually achieve the goal that you aimed for',
    bad: 'You seems to be falling behind in your revision, maybe it  is about time that you mug harder,future is worth it'
},
career={
    name:'career',
    good:'You are up for a big promotion! keep up the pace, ensure that you do not burn out! all the best in career developement',
    bad: 'Your job sucks!, Maybe it is about time that you change up your career and reflect back'
},
relationship={
    name:'relationship',
    good: 'Currently, you are in a well healthy relationship! Keep up the good work, She might be the one for you!',
    bad : 'Come on, put some effort into her! you can do better'
}
let collection=[finance,family,studies,career,relationship];

//initial action wording
let positive =['hopeful.', 'optisimistic.','assured.','reassuring.','bright.','auspicious.'];
let negative =['gloomy.','discouraging.','worrying.','warying.','daunting.','heartsore.'];

//main
let initial=['Although the future is volitile and uncertain, the future for you seems'];
let rand=Math.floor(Math.random()*2);
let choice=['good','bad']
let fate=selector(choice);
if (fate==='good'){
    initial.push(selector(positive))
}
else{
    initial.push(selector(negative))
}
let fortuneNumber=Math.floor(Math.random()*5);
if(fortuneNumber>2){
    initial.push(' You are lucky that i got the time, i will give u more than 3 fortunes. ');
}
else{
    initial.push(' Too bad i do not have much time today, hence i will only give a limited fortune. ');
}
for (let i=0;i<fortuneNumber;i++){
    if(fate==='good'){
        let additional=selector(collection);
        initial.push(`For ${additional.name}:`)
        initial.push(additional.good)
    }
    else{
        let additional=selector(collection);
        initial.push(`For ${additional.name}:`)
        initial.push(additional.bad)
    }
}
console.log(initial)
