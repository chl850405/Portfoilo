var index = 0;


function show_project(i) {
    index += i;
    console.log(index)

    var projects = document.getElementsByClassName("project");
    //if user is on last project and clicks next, the user will be sent to first project
    if(index > projects.length - 1) {
        index = 0;
    }
        //if user is on first project and clicks previous, the user will be sent to last project
        if(index < 0) {
        index = projects.length - 1 ;
    }

    var dots = document.getElementsByClassName("dot");

    //blocks projects from showing on screen
    for (i = 0;i < projects.length;i++) {
    projects[i].style.display = "none"
    }

    //turns the dot darker corresponding with the project displayed
    for (i = 0;i < dots.length;i++) {
    dots[i].className = dots[i].className.replace("active", "")
    }
    dots[index].classList.add('active')

    projects[index].style.display = "block";
}

show_project(index);

function send() {
    emailjs.init("user_HxFKMlHEFrDRwR3g925np");
} 
send();