function say(word) {
    console.log(word);
}

function execute(somefunction,value) {

    somefunction(value);
}

execute(say,"hello nihao ");

execute(function(word) {console.log(word) }, "hell0");