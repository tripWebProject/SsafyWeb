const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
btn.addEventListener("click", function () { 
    console.log("클릭");
    btn.classList.toggle("active"); //스르륵 움직이기
    nav.classList.toggle("active"); //스르륵 움직이기
    btn.innerText = "☰";
    if (btn.classList.contains("active")) {
        btn.innerText = "X";
    }
});

