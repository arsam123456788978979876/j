var input = document.getElementById("input");
var addButton = document.getElementById("add")
var tasks = document.getElementById("tasks")
addButton.addEventListener("click" , addTask)
function addTask(){
    if (input.value.trim() !== "" ){
        if (input.value.length >= 3){
    var li =document.createElement("li")
    li.innerHTML = input.value 
    var removeBtn = document.createElement("span")
    removeBtn.innerHTML = "X"
    removeBtn.addEventListener("click" , removeTask)
    function removeTask(){
        li.remove()
    }
    li.appendChild(removeBtn)
    li.addEventListener("click" , completeTrigger)
     function completeTrigger () {
        li.classList.toggle("active")
    } 
    tasks.appendChild(li)
    input.value = ""
    } else {
        alert("minimum chat 3")
    }
    } else {
        alert("please enter the text")
    }
}
input.addEventListener("keypress" , onEnter)
function onEnter(event) {
    if(event.keyCode === 13 ) {
        addTask()
    }
}