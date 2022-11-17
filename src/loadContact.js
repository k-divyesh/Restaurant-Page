function createInfo() {
    var main = document.createElement("main");
    var div1 = document.createElement("div");
    div1.innerHTML = '<span class="material-symbols-outlined">call</span> +63 933 823 4888';
    main.append(div1);
    var div2 = document.createElement("div");
    div2.innerHTML = '<span class="material-symbols-rounded">location_on</span> Gapan City, Nueva Ecija, Philippines';
    main.append(div2);
    var div3 = document.createElement("div");
    div3.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15398.020634478684!2d120.93710043955076!3d15.240223200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971f1cde05c7cf%3A0x1acdd693c4452382!2sFeliza&#39;s%20Food%20House!5e0!3m2!1sen!2sae!4v1668680238889!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    main.append(div3);
    main.setAttribute("id", "contact");
    return main;
}

function loadContact() {
    const content = document.getElementById("content")
    content.append(createInfo());
}

export default loadContact;