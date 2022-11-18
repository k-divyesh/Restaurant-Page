import css from "./style.css"
import loadHeader from "./loadHead";
import removeMain from "./clearMain";
import loadHome from "./loadHome"
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";



function usePercentage(){
    var content = document.querySelector("#content")
    if (content.classList.contains("viewheight")) {
        content.classList.add("percentage")
        content.classList.remove("viewheight")
    }
}

function useViewHeight(){
    var content = document.querySelector("#content")
    if (content.classList.contains("percentage")) {
        content.classList.add("viewheight")
        content.classList.remove("percentage")
    }
}


function action(funCall){
    removeMain()
    funCall;
}

function addNavEvents() {
    const HOME = document.querySelector(".HOME")
    const MENU = document.querySelector(".MENU")
    const CONTACT = document.querySelector(".CONTACT")
    const findOutMore = document.querySelector(".findOutMore")

    HOME.addEventListener("click", function(){
        action(loadHome());
        useViewHeight();
    })
    MENU.addEventListener("click", function(){
        action(loadMenu());
        usePercentage();
    })
    CONTACT.addEventListener("click", function(){
        action(loadContact())
        useViewHeight();
    })
    findOutMore.addEventListener("click", function(){
        action(loadContact());
        usePercentage();
    })
}

loadHeader();
loadHome();
addNavEvents()