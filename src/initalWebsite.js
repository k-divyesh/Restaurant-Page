function createHeader() {
    var header = document.createElement("header");
    
    var h1 = document.createElement("h1");
    header.append(h1);
    var heading = document.createElement("a")
    heading.innerHTML = "Restaurant";
    heading.setAttribute("href", "./index.html")
    h1.append(heading)
    
    var links = document.createElement("div");
    header.appendChild(links);
    links.setAttribute("id","links")

    var linksArr = ["HOME", "MENU", "CONTACT"];
    linksArr.forEach(element=> {
        var h4 = document.createElement("h4");
        links.appendChild(h4)
        var a = document.createElement("a")
        h4.appendChild(a)
        a.innerHTML = element;        
        a.classList.add("link")
    })

    return header;
}


function createHeroText() {
    var main = document.createElement("main")
    var h2 = document.createElement("h2")
    h2.innerHTML = "Where every flavor tells a story<br><a>find out more...</a>"
    main.append(h2)
    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content")
    console.log(content);
    content.appendChild(createHeader());
    content.appendChild(createHeroText());
}


export default initializeWebsite;