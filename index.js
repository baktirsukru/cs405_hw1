console.log("hello world ... ")


    console.log("hello from inline")

    function buttonHandler(){
        alert("oiy")
    }
    
    const button = document.querySelector("buttonElem")
    button.addEventListener("click", buttonHandler)
    button.removeEventListener("click", buttonHandler)
