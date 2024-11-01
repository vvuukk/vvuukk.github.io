const myImage = document.querySelector("img");

myImage.onclick = () => {
   const mySrc = myImage.getAttribute("src");

   if(mySrc === "slika.jpg"){
      myImage.setAttribute("src","pigs.jpg");
   }
    /*const mySrc = myImage.getAttribute("src");
    if(mySrc == "slika.jpg"){
        myImage.setAttribute("src","bugs.jpg");
    }
    if(mySrc == "pigs.jpg"){
        myImage.setAttribute("src","bugs.jpg");
    }
    if(mySrc == "bugs.jpg"){
        myImage.setAttribute("src","slika.jpg");
    }*/
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name:");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent=`Mozzila is cool, ${myName}`; 
    }
    
}

if (!localStorage.getItem("name")){
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozzila is cool, ${storedName}`;   
}

myButton.onclick = () => {
    setUserName();
}
