const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value == ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){ // saves data, call after every action
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){ // shows saved data, always call this 
    listContainer.innerHTML = localStorage.getItem("data");
}

// Get the input field
var input = document.getElementById("input-box");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    addTask(); // call add task func
  }
});

showTask();