function getUserName(){
    let userName = prompt("ПРИВЕТ! Назовись, пожалуйста!");
    return name = userName;
}

function printUserName(userName){
    let outputTag = document.getElementById("helloUser");
    outputTag.textContent = `Приветствую тебя, о Великий ${userName} !!!`;
    outputTag.classList.add("redAlert");
    document.getElementById("hidden1").style.display = "block";
}

function reset(){
    let outputTag = document.getElementById("helloUser")
    outputTag.textContent = `Тебе уже надоело? Ну пока...`;
    outputTag.classList.remove("redAlert");
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("business").classList.remove("todoDone");
    document.getElementById("hidden1").style.borderColor = "red";
    document.getElementById("result").textContent = "";
}

function askAge(){
    let age = parseInt(prompt(`Позвольте поинтересоваться за Ваш возраст? :)`));

    if (age < 7){
        alert("А НУ БЫСТРО ОТОЙДИ  ОТ КОПЬЮТЕРА! МАЛ ЕЩЁ !");
    } else if (age >= 7 && age < 16){
        alert("Пора учить уроки, завтра контрольная!");
    } else if (age >= 16 && age < 22){
        alert("Вы совершеннолетний. Можно всё. Но много чего нельзя.");
    } else if (age >= 22 && age < 60){
        alert("Пора в люльку, завтра рано вставать на работу!");
    } else if (age >= 60 && age < 85){
        alert("От пенсии до пенсии живут бабульки весело :)");
    }
    else{
        alert("... СЛИШКОМ ... СЛОЖНО ... ИИ ещё не вычислил направление Вашей судьбы...");
    }

}

function allDone(){
    document.getElementById("business").classList.add("todoDone");
    document.getElementById("hidden1").style.borderColor = "green";
    document.getElementById("result").textContent = "УРА! Ты всё сделал! ТЫ МОЛОДЕЦ! Я в тебе не сомневался!";
}

function allUndone(){
    document.getElementById("business").classList.remove("todoDone");
    document.getElementById("hidden1").style.borderColor = "red";
    document.getElementById("result").textContent = "Поторопись! Время быстро заканчивается!";
}


