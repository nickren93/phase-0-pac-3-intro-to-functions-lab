//define each functions as requred:
function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!";
    }else if(string === string.toUpperCase()){
        return "YES INDEED!";
    }else if(string === "Let's have dinner together!"){
        return "I would love to!";
    }
}

//involke each function and printout
console.log(shout("hello"));
console.log(whisper("HELLO"));
logShout("Hello");
logWhisper("Hello");
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));