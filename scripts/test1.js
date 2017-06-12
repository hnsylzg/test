function insertParagraph(text) {
    var str = "<P>";
    str += text;
    str += "</P>";
    document.write(str);
}
// window.onload = function () {
//     var testdiv = document.getElementById("testdiv");
//     var testdiv1 = document.getElementById("testdiv1");
//     alert(testdiv.innerHTML);
//     testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }
// window.onload = function () {
//     var para = document.createElement("p");
//     var info = "nodeName: ";
//     info += para.nodeName;
//     info += " nodeType: ";
//     info += para.nodeType;
//     alert(info);
// }
window.onload = function () {
var para=document.createElement("p");
var txt=document.createTextNode("Hello World!");
var testdiv1=document.getElementById("testdiv1");
para.appendChild(txt);
testdiv1.appendChild(para);
}