function createhading(){
    const button = document.createElement("button");
    button.textContent = "click me";


    const paragraph = document.getElementById("Paragraph");
    
    document.replaceChild(button, paragraph);
}