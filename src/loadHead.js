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
        a.classList.add("link", `${element}`)
    })

    return header;
}

function loadHeader() {
    const content = document.getElementById("content")
    content.appendChild(createHeader());
}


export default loadHeader;
