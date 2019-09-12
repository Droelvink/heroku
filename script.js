var textarea = document.getElementById('typed');
var pretyping = true;

var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789";
var command = "";

var options = {
    strings: [
        "`Dennis Roelvink [15/01/2019]\n"+
        "(c) Dennis Roelvink. All rights reserved.\n"+
        "MAIN>`" +
        "^1000HELP^1000\n" +
        "\n" +
        "`Available commands:\n"+
        "* INFO\n" +
        "* ABOUT\n" + 
        "* PROJECTS\n" + 
        "* RESUME\n" + 
        "* CONTACT\n" + 
        "\n" +
        "MAIN>`"
    ],
    onComplete: function(self) {
        //textarea.disabled = false;
        pretyping = false;
    },
    typeSpeed: 80
}

document.onkeyup = function(e) {
    if(!pretyping) {
        if(IsAllowedToType(e.key.toUpperCase())) {
            textarea.value += e.key.toUpperCase();
            command += e.key.toUpperCase();
        }
        else if (e.key === "Backspace") {
            if(textarea.value[textarea.value.length-1] !== ">") textarea.value = textarea.value.slice(0, textarea.value.length-1);
            
            if(command.length > 0) command = command.slice(0, command.value.length -1);
        }
        else if (e.key === "Enter") {

            switch(command) {
                case "CLEAR":
                    textarea.value += "\nClever person...\nMAIN>";
                    break;

                    default:
                    textarea.value += "\nUnknown command '"+command.trim()+"'\nMAIN>";
                    break;
            }
            command = "";
        }
    }

    
}

function IsAllowedToType(key) {
    return (allowed.search(key) >= 0);
}


var typed = new Typed("#typed", options);
