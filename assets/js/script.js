
let loginbtn = document.getElementById('login')

// 
window.addEventListener("load", () => {
    if (sessionStorage.getItem("currentUser")) {
        loginbtn.innerHTML = ""
        let userLogin = JSON.parse(sessionStorage.getItem("currentUser"));
        loginbtn.innerHTML =
            `
            <div class="btn-group">
        <a class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#"><i class="bi bi-person-circle"></i> ${userLogin.name}</a>
        <ul class="dropdown-menu" style="position: absolute; left:-30px">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Setting</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" onclick="Logout()" href="#">Logout</a></li>
        </ul>
        </div>
        `
    }
})

function register() {
    let userName = document.getElementById("userName").value
    let userEmail = document.getElementById("email").value
    let userPassword = document.getElementById("password").value

    if (!(userName && userEmail && userPassword)) {
        Swal.fire({
            title: "Fill The All Record?",
            // text: "That thing is still around?",
            icon: "question"
        });
    } else {
        let users = {
            name: userName,
            Email: userEmail,
            password: userPassword,
        }
        $addDetail = localStorage.setItem("userData", JSON.stringify([users]))
        $login = sessionStorage.setItem("currentUser", JSON.stringify(users))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register SuccessFully",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(function () {
            location.href = 'index.html';
        }, 1501);
    }
}


//  Add Task Function
function addtask() {
    if (!sessionStorage.getItem("currentUser")) {
        Swal.fire("Please Log In");
        document.getElementById('showtasks').innerHTML = ""
    } else {
        let addtask = document.getElementById('taskName').value
        let taskdate = document.getElementById('taskdate').value

        if (!(addtask && taskdate)) {
            Swal.fire({
                title: "Fill The All Record?",
                // text: "That thing is still around?",
                icon: "question"
            });
        } else {
            let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
            let todolists = {
                userName: currentUser.name,
                taskName: addtask,
                taskDate: taskdate,
            }
            if (localStorage.getItem("todoLists")) {
                let tasks = JSON.parse(localStorage.getItem('todoLists'));
                tasks.push(todolists);
                localStorage.setItem("todoLists", JSON.stringify(tasks));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task Added SuccessFull",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1501);
            } else {
                $addDetail = localStorage.setItem("todoLists", JSON.stringify([todolists]))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task Added SuccessFull",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1501);
            }
        }
    }
}


// SHOWING TODO LIST WORK
var showToDoList = document.getElementById('showToDoList')
let getToDOListItem = JSON.parse(localStorage.getItem("todoLists"))
showToDoList.innerHTML = `<ul class="list-group list-group-flush">
<li class="list-group-item">Task Name: ${getToDOListItem.userName} </li>
<li class="list-group-item">Task Name: ${getToDOListItem.taskName} </li>
<li class="list-group-item">Task Date: ${getToDOListItem.taskDate}</li>
<li class="list-group-item">
    <a href="#"> 
        <span class="btn btn-warning"><i class="bi bi-pen"></i></span> 
    </a>
    <a href="#"> 
        <span class="btn btn-danger"><i class="bi bi-trash2-fill"></i></span>
    </a>
</li>
</ul>`

//  Logout Function
function Logout() {
    Swal.fire("Warning", "Are you sure want to logout?", "question").then(
        (res) => {
            if (res.isConfirmed) {
                sessionStorage.removeItem("currentUser");
                location.href = "./index.html";
            }
        }
    );
}