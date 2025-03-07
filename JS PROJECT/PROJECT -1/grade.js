function add() {
    let no1 = Number(document.getElementById("num1").value);
    let no2 = Number(document.getElementById("num2").value);
    let no3 = Number(document.getElementById("num3").value);
    let a = document.getElementById("a");
    let text1 = document.getElementById("text1");
    let j = no1 + no2 + no3;
    console.log(j);
    text1.innerHTML = "your total is = ";
    a.innerText = j;
    let sub = document.getElementById("sub");
    if ((no1 < 33 || no2 < 33) || no3 < 33) {
        sub.innerText = "YOU ARE FAIL";
    } else {
        sub.innerText = "YOU ARE PASS IN ALL subject";
    }
    let per = document.getElementById("per");
    let p = document.getElementById("p");
    let percentage = parseInt((j / 300) * 100);
p.innerText=`percentage=${percentage}%`
    console.log(percentage);
    console.log(typeof(percentage));
    
    if (percentage > 95) {
        per.innerText = "grade A+";
    } else if (percentage >= 90) {
        per.innerText = "grade A";
    } else if (percentage >= 70 && percentage < 90) {
        per.innerText = "grade B";
    } else if (percentage >= 50 && percentage < 70) {
        per.innerText = "grade C";
    } else if (percentage >= 35 && percentage < 50) {
        per.innerText = "grade D";
    } else {
        per.innerText = "grade F";
    }
}
