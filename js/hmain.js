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

function musicPurpleBtn() {

    // 토글 할 버튼 선택 (btn1)
    const mPlayer = document.getElementById('musicPlayer');

    // btn1 숨기기 (display: none)
    if (mPlayer.style.display !== 'none') {
        mPlayer.style.display = 'none';
    }
    // btn` 보이기 (display: block)
    else {
        mPlayer.style.display = 'block';
    }

}