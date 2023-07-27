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
        let p = document.createElement("p"); //Crea un span
        check.type = 'checkbox'
        li.classList = 'todolist'
        p.classList= 'muevoestacosa'
        // li.innerHTML = inputBox.value; //Añadir valor del input
        p.textContent = inputBox.value;
        li.appendChild(check)
        li.appendChild(p)

        
        let deleteBtn = document.createElement("span"); //Crea span
        deleteBtn.innerHTML = "\u00d7"; //Añadir (x) al span
        li.appendChild(deleteBtn); //Añadir span a li

        listContainer.appendChild(li); //Añadi li generado al contenedor

        check.value = 0;
        check.addEventListener("change", function()
        {
            if(check.value == 0)
            {
                countMore();
                check.value = 1;
                p.classList='clasePrueba'
            }   
            else
            {
                countLess();
                check.value = 0;
                p.classList.remove('clasePrueba')

            }
        });

    }

    inputBox.value = "";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("check");
        e.classList = 'clasePrueba'
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false );

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask ();

function countMore()
{
    counter++;
    countNumber.textContent = counter;
}

function countLess()
{
    counter--;
    countNumber.textContent = counter;
}
