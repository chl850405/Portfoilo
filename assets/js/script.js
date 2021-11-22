var index = 0;


function show_project(i) {
    index += 1;

    var projects = document.getElementsByClassName("project");

    var dots = document.getElementsByClassName("dot");

    //blocks projects from showing on screen
    for (i = 0;i < projects.length;i++)
    projects[i].style.display = "none"

    //turns the dot darker corresponding with the project displayed
    for (i = 0;i < dots.length;i++)
    dots[1].className = dots[i].className.replace("active", "")

    //if user is on last project and clicks next, the user will be sent to first project
    if(index > projects.length - 1)
    index = 0;

    //if user is on first project and clicks previous, the user will be sent to last project
    if(index < 0)
    index = projects.length - 1 ;

    projects[index].style.display = "block";
    dots[index].className += "active";
}

show_project(index);