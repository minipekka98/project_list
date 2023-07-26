const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const countNumber = document.getElementById("number");

var counter = 0;

// Execute a function when the user presses a key on the keyboard
inputBox.addEventListener("keypress", function(event) 
{
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") 
    {
        console.log("Enter!");
        addTask();
    }

});

function addTask(){
    if(inputBox.value === ''){
        alert("you must write somethings");
    }
    else
    {
        let li = document.createElement("li"); //Crea un li
        let check = document.createElement("input"); //Crea un li
        check.type = 'checkbox'
        li.innerHTML = inputBox.value; //Añadir valor del input
        li.appendChild(check)
        listContainer.appendChild(li); //Añadi li generado al contenedor

        let deleteBtn = document.createElement("span"); //Crea span
        deleteBtn.innerHTML = "\u00d7"; //Añadir (x) al span
        li.appendChild(deleteBtn); //Añadir span a li

    }

    inputBox.value = "";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

        //CAMBIAR A CHECK!! - - - - - >
        counter++;
        countNumber.textContent = counter;
    }
}, false );

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask ();
