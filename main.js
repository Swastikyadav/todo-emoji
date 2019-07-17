// TODO
var winky = document.querySelector(".face");
var winkyEye = document.querySelector(".eye2");
var winkyMouth = document.querySelector(".mouth");

var input = document.querySelector("input");
var ul = document.querySelector("ul");

input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        if (input.value !== "") {

        var li = document.createElement("li");
        var para = document.createElement("p");

        para.innerText = "X";
        para.style.padding = "0 8px";

        li.innerHTML = `<span>${input.value}</span>`;
        li.appendChild(para);

        // Delete TODO
        para.addEventListener("click", function() {
            li.style.display = "none";
        });

        li.addEventListener("dblclick", function() {
            var liText = li.innerText;
            li.innerHTML = `<input id='updateInput' type='text' value='${liText}'>`;
            li.style.marginTop = "-140px";

            var updateInput = document.getElementById("updateInput");
            updateInput.addEventListener("keyup", function(e) {
                if (e.keyCode == 13) {
                    li.innerText = updateInput.value;
                    li.style.marginTop = "";
                    li.appendChild(para);
                }
            });
        });

        ul.appendChild(li);

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
    }
});

// WINKY - Emoji

winky.addEventListener("mouseover", function() {
    winkyMouth.classList.add("winkyMouth");
});
winky.addEventListener("mouseout", function() {
    winkyMouth.classList.remove("winkyMouth");
});
winky.addEventListener("mouseover", function() {
    winkyEye.style.backgroundColor = "black";
});
winky.addEventListener("mouseout", function() {
    winkyEye.style.backgroundColor = "";
});