function addLoadEvent(func) {
    var oldonLoad = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonLoad();
            func();
        }
    }
}
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextElementSibling);
    }
}
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    return false;
}
function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var grallery = document.getElementById("imagegallery");
    insertAfter(placeholder, grallery);
    insertAfter(description, placeholder);
}
function prepareGallery() {
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    var onclick = function () {
        return showPic(this);
    }
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = onclick;
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);