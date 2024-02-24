let navbar = `<nav class="navbar navbar-expand-lg bg-info">
<div class="container-fluid">
    <a class="navbar-brand text-light" href="#">To Do List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li class="nav-item">
                <a class="nav-link text-light active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light active" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light active" aria-current="page" href="#">Contact</a>
            </li>
            <div id="isUserLogedIn">
                <a href="login.html" type="button" class="btn btn-light">Login </a>
            </div>
        </ul>

    </div>
</div>
</nav>`;

let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar;