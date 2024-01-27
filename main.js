
/* kart numarasını karta yansıtma */
const cardNo = document.querySelector(".card-number-input")
    cardNo.oninput = () => {
    document.querySelector(".card-number-box").innerText = 
    document.querySelector(".card-number-input").value;
}

let currentLength = 16;
cardNo.addEventListener("input", () => {
    currentLength = cardNo.value.length;
})

/* kart sahibinin adını karta yazdırma */
const cardHolder = document.querySelector(".card-holder-input")
    cardHolder.oninput = () => {
    document.querySelector(".card-holder-name").innerText = 
    document.querySelector(".card-holder-input").value;
}

/* ay bilgilerini karta yansıtma */
const month = document.querySelector(".month-input")
    month.oninput = () => {
    document.querySelector(".exp-month").innerText = 
    document.querySelector(".month-input").value + " /";
}

/* yıl bilgilerini karta yansıtma */
const year = document.querySelector(".year-input")
    year.oninput = () => {
    document.querySelector(".exp-year").innerText = 
    document.querySelector(".year-input").value ;
}

/* cvv alanının üzerine gelindiğinde */
const cvv = document.querySelector(".cvv-input")
    cvv.onmouseenter = () => {
    document.querySelector(".front").style.transform = 
    "perspective(1000px) rotateY(-180deg)"
    document.querySelector(".back").style.transform = 
    "perspective(1000px) rotateY(0deg)";
}

/* cvv alanının üzerinden ayrıldığında */
    cvv.onmouseleave = () => {
    document.querySelector(".front").style.transform = 
    "perspective(1000px) rotateY(0deg)"
    document.querySelector(".back").style.transform = 
    "perspective(1000px) rotateY(180deg)"
}

/* document.querySelector(".cvv-input") */
    cvv.oninput = () => {
    document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
}