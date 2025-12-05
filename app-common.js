
const BASE = "/vocab-test/";

function startQuiz(){
    window.location.href = BASE + "quiz.html";
}

window.onload = () => {
    const back = document.getElementById("backBtn");
    if(back){
        back.onclick = ()=> window.location.href = BASE + "home.html";
    }
};
