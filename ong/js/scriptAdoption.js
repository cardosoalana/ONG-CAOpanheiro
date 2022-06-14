const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsAdoptionJson.map((item, index) => {
    let modelsAdoptionItem = c(".models .models-item").cloneNode(true);
    modelsAdoptionItem.querySelector(".models-item-name").innerHTML = item.name;
    modelsAdoptionItem.querySelector(".models-item-description").innerHTML = item.description;
    modelsAdoptionItem.querySelector(".models-item-img img").src = item.img;

    modelsAdoptionItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        c(".modelsWindowArea").style.display = "flex";
        c(".modelsBig img").src = item.img
        c(".modelsInfo h1").innerHTML = item.name;
        c(".modelsInfo-desc").innerHTML = item.description;
    });

    c(".modelsWindowInfo-cancelMobileButton").addEventListener("click", (e)=>{
        e.preventDefault();

        c(".modelsWindowArea").style.display = "none";
    });

    c(".modelsInfo-cancelButton").addEventListener("click", (e)=>{
        e.preventDefault();

        c(".modelsWindowArea").style.display = "none";
    });

    c (".models-area").append(modelsAdoptionItem);
}); 