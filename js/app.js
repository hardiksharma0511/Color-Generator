const getcolor =  () => {
    //Hex code
    const randomNumber = Math.floor(Math.random() * 1677215);
    //console.log(randomNumber);
    const randomCode = "#"+randomNumber.toString(16);
    console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;

    // if we want the code to be copied in our clipboard
    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//initial call
getcolor()