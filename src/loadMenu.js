function createMenu() {
    var main = document.createElement("main")
    const menuTitles = ["Starters", "Main Course", "Dessert"]
    const starterList = ["Cheese Sticks", "Sizzling Sisig", "Tikoy", "Fried Okra"]
    const mainCourseList = ["Abodo", "Kare Kare", "Sinigang", "Pancit Guisado", "Fried Lumpia", "Ginataang Gulay"];
    const dessertList = ["Halo Halo", "Leche Flan", ];
    const menuDishes = [starterList, mainCourseList, dessertList];

    for(let i=0; i<menuTitles.length; i++) {
        var title = document.createElement("h3")
        title.innerText = menuTitles[i];
        main.append(title)
        menuDishes[i].forEach(element => {
            var dish = document.createElement("h5")
            dish.innerText = element;
            main.append(dish)
        });
    }
    main.setAttribute("id", "menu")
    return main;
}

function loadMenu() {
    const content = document.getElementById("content")
    content.appendChild(createMenu());
}


export default loadMenu;