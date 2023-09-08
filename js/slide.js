const slides = document.getElementsByClassName("slide");
// console.log("asdad");
for (const slide of slides) {
    slide.addEventListener("click", function() {
        let side = document.querySelector(".side");
        while(side.firstChild){
            side.removeChild(side.firstChild)
        }
        let article = document.createElement("article");
        for(let i = 1; i < 4; i++) {
            article.className = "article-container";
            
            let img = document.createElement("img");
            img.src=`./assets/img/${slide.getAttribute('data-food-type')}${i}.jpg`;
            article.appendChild(img);
            side.appendChild(article);
        }
    })
}