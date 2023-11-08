function checkPassword() {
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    var contentDiv = document.getElementById("main");

    // Replace 'your_password' with the actual password you want to use
    if (password === "hello") {
        errorMessage.textContent = "";
        contentDiv.style.display = "block";
        document.getElementById("password-form").style.display = "none";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
const url='https://raw.githubusercontent.com/adi-yantrik/selfImprovAPI/main/api';

window.addEventListener("load", () => fetchdetail());

function reload() {
    window.location.reload();
}

async function fetchdetail(query) {
    const res = await fetch(`${url}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const detailCardTemplate = document.getElementById("template-detail-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = detailCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const detailImg = cardClone.querySelector("#detail-img");
    const detailTitle = cardClone.querySelector("#detail-title");
    const detailDate = cardClone.querySelector("#detail-date");
    const task_0 = cardClone.querySelector("#task-0");
    const task_1 = cardClone.querySelector("#task-1");
    const task_2 = cardClone.querySelector("#task-2");
    const task_3 = cardClone.querySelector("#task-3");
    const task_4 = cardClone.querySelector("#task-4");
    const task_5 = cardClone.querySelector("#task-5");
    const task_6 = cardClone.querySelector("#task-6");
    const task_7 = cardClone.querySelector("#task-7");
    const task_8 = cardClone.querySelector("#task-8");
    const task_9 = cardClone.querySelector("#task-9");
    detailImg.src = article.urlToImage;
    detailTitle.innerHTML = article.title;
    detailDate.innerHTML = article.date;
    task_0.innerHTML = article.li_0;
    task_1.innerHTML = article.li_1;
    task_2.innerHTML = article.li_2;
    task_3.innerHTML = article.li_3;
    task_4.innerHTML = article.li_4;
    task_5.innerHTML = article.li_5;
    task_6.innerHTML = article.li_6;
    task_7.innerHTML = article.li_7;
    task_8.innerHTML = article.li_8;
    task_9.innerHTML = article.li_9;
}

