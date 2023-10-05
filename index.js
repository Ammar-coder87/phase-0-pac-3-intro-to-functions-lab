function shout(string) {
    return string.toUpperCase();

}
//console.log(shout("hello"));
//console.log(shout("Hello".toUpperCase()));

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    //return string.toUpperCase();
    
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("AMMAR");


function sayHiToHeadphonedRoommate(string) {

    if (string === string.toLowerCase() /*&& string !== "Let\'s have dinner together!"*/) {

        return "I can\'t hear you!";
    } else if (string === string.toUpperCase() /*&& string !== "Let\'s have dinner together!"*/) {
        return "YES INDEED!";
    } else if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    } else {
        return false;
    }

}
console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"));

