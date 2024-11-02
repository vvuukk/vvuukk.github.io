const myImage = document.querySelector("img");

const pozadine = document.querySelector("h1");

let uvod = myImage.getAttribute("src").split("/")[1].split(".")[0];
pozadine.innerHTML += uvod;

let br = 1;

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    let ime = "";
    mySrc.split("/")[1].split(".")[0];
    if(mySrc === "pigs.jpg"){
        myImage.setAttribute("src","hyrax.jpg");
        ime = "hyrax";
    }  
    if(mySrc ==="hyrax.jpg"){
        myImage.setAttribute("src","bugs.jpg");
        ime = "bugs";
    }
        
    if(mySrc === "bugs.jpg"){
        myImage.setAttribute("src","pigs.jpg");
        ime = "pigs";
    }
        
    if(!pozadine.innerHTML.includes(ime)){
        pozadine.innerHTML += ", ";
        pozadine.innerHTML +=ime;
        br++;
    }
        
    if(pozadine.innerHTML.charAt(pozadine.innerHTML.length-1)==','){
        let pozz = pozadine.innerHTML.substring(0,pozadine.innerHTML.length-1);
        pozadine.innerHTML = pozz;
    }
    
}

let myButton = document.querySelector("button");

myButton.onclick = () => {
    notifikacija();
}

function notifikacija(){
    if(br>1 && br<5)
        alert("Trenutno ima "+br+" pozadine!");
    else
        alert("Trenutno ima "+br+" pozadina!");
}
