var character = document.getElementById("character");

document.addEventListener("click",  jump);
 
function jump () {
    if(character.classList.contains("animate") == true) {
        return;
    } else {
        character.classList.add("animate");
        setTimeout(removeJump, 300); /*скорость прыжка*/ 
    }
} 

function removeJump () {
    character.classList.remove("animate");
}

