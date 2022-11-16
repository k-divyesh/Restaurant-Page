import loadHeader from "./loadHead";
import emptyMain from "./clearMain"
import initializeWebsite from "./initalWebsite";

loadHeader();
initializeWebsite();


function addNavEvents() {
    const HOME = document.querySelector(".HOME")
    // const MENU = document.querySelector(".MENU")
    // const CONTACT = document.querySelector(".CONTACT")

    HOME.addEventListener("click", action(initializeWebsite()))
    // MENU.addEventListener("click", somefunction)
    // CONTACT.addEventListener("click", somefunction)
}

function action(funCall){
    emptyMain()
    funCall;
}

addNavEvents()