/*a very basic javascript example to change the header text)*/

//not sure if it affects multiple headers that are loaded prior to it being executed

/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"; */

const myImg = document.querySelector("img");
myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "images/anime-girls-friends-wink-smiling-wallpaper-thumb.jpg"){
        myImg.setAttribute("src", "images/anime-girls-friends-wink-smiling-wallpaper-thumb-edited.jpg")
    } else {
        myImg.setAttribute("src", "images/anime-girls-friends-wink-smiling-wallpaper-thumb.jpg")
    }
}; 

function multiplication(num_1, num_2){
    return num_1 * num_2;
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  


/* document.querySelector("html").addEventListener("click", () => {
    alert("STOP FUCKING TOUCHING ME");
}) */