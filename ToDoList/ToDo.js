// JavaScript source code

function addTask() {
    var i;
    let taskName = document.getElementById('taskName').value;
    if (taskName) {
        let myList = document.getElementById('myList');
        myList.setAttribute("style", "list-style-type:none;");
        myList.innerHTML += "<li class= 'listItem' style='font - size: 90px'> <input type='checkbox' class='selected'/>"
            + taskName + "<button id = 'deleteButton' class='delete'>Delete</button> </li>";
        document.getElementById('taskName').value = '';
    }
    let deleteTask = document.getElementsByClassName("delete");
    let selectTask = document.getElementsByClassName("selected");
    
    for (i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
        selectTask[i].onclick = function selectTask() {
            let selected = document.getElementsByClassName("selected");
            let listItem = document.getElementsByClassName("listItem");
            for (i = 0; i < selected.length; i++) {
                if (selected[i].checked) 
                    listItem[i].style.textDecoration = "line-through";
                else
                    listItem[i].style.textDecoration = "";
            }
        };
    }
}
