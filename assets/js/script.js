

let btnRegister = document.getElementById("btn-register")

btnRegister.addEventListener("click", () => {
    let userName = document.getElementById("userName").value
    let userEmail = document.getElementById("email").value
    let userPassword = document.getElementById("password").value

    if (!(userName && userEmail && userPassword)) {
        Swal.fire({
            title: "Fill The All Record?",
            // text: "That thing is still around?",
            icon: "question"
        });
    }else{
        if(localStorage.getItem("userDetails")){
            
        }
    }

})
{/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}

