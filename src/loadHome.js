function createHeroText() {
    var main = document.createElement("main");
    var h2 = document.createElement("h2");
    h2.innerHTML = "Where every flavor tells a story<br><a class='findOutMore'>find out more...</a>";
    main.append(h2);
    main.setAttribute("id", "home")
    return main;
}

function loadHome() {
    const content = document.getElementById("content")
    content.append(createHeroText());
}

export default loadHome;