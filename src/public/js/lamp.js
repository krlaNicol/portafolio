let encendidas = [false, false, false];
let luces = document.querySelectorAll(".light");
let inputs = document.querySelectorAll("input");

function encender(i){
    if(encendidas[i]==false){
        luces[i].className="light l"+i;
        encendidas[i] = true;
    }else{
        luces[i].className="light";
        encendidas[i] = false;
        inputs[i].checked = false; 
    }
}



