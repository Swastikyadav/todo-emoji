// TODO
var winky = document.querySelector(".face");
var winkyEye = document.querySelector(".eye2");
var winkyMouth = document.querySelector(".mouth");

var input = document.querySelector("input");
var ul = document.querySelector("ul");
input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        var li = document.createElement("li");
        var para = document.createElement("p");

        para.innerText = "X";

        li.innerText = input.value;
        li.appendChild(para);
        li.setAttribute = ("hidden", "false");

        ul.appendChild(li);

        // Delete TODO
        para.addEventListener("click", function() {
            li.hidden = "true";
        });

        winkyEye.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });

        winkyEye.style.backgroundColor = "black";
        setTimeout(() => {
            winkyEye.style.backgroundColor = "#fff";
        }, 200);

        winkyMouth.style.borderRadius = "50%";
        winkyMouth.style.width = "30px";
        winkyMouth.style.left = "120px";

        setTimeout(() => {
            winkyMouth.style.borderRadius = "";
            winkyMouth.style.width = "";
            winkyMouth.style.left = "";
        }, 200);

        input.value = "";
    }
});

// WINKY - Emoji

winky.addEventListener("mouseover", function() {
    winkyMouth.style.borderRadius = "50%";
    winkyMouth.style.width = "30px";
    winkyMouth.style.left = "120px";
});
winky.addEventListener("mouseout", function() {
    winkyMouth.style.borderRadius = "";
    winkyMouth.style.width = "";
    winkyMouth.style.left = "";
});
winky.addEventListener("mouseover", function() {
    winkyEye.style.backgroundColor = "black";
});
winky.addEventListener("mouseout", function() {
    winkyEye.style.backgroundColor = "";
});