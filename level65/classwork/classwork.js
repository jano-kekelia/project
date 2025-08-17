div = document.getElementById(id)

let position = 0

function id() {
    position += 20;
    div.style.left = position + "px"
    if (position === 600){
        clearInterval(myinterval)
    }



    let myinterval = setInterval(id, 600)
}


