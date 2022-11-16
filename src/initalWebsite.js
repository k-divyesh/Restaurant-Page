

function createHeroText() {
    var main = document.createElement("main")
    var h2 = document.createElement("h2")
    h2.innerHTML = "Where every flavor tells a story<br><a>find out more...</a>"
    main.append(h2)
    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content")
    content.appendChild(createHeroText());
}


export default initializeWebsite;