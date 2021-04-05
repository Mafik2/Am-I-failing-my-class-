function add() {
    lineGrade++;
    let line = document.createElement("label");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let grades = document.getElementById("grades");
        grades.appendChild(div1);
        line.setAttribute("id", "grade");
        input1.setAttribute("type", "text");
        input1.setAttribute("id", "grade" + lineGrade);
        input2.setAttribute("type", "text");
        input2.setAttribute("id", "weight" + lineGrade);
        label2.setAttribute("for", "weight" + lineGrade);
        label1.setAttribute("for", "grade" + lineGrade);
        div1.setAttribute("id", "div" + lineGrade);
        div1.appendChild(line)
        div2.setAttribute("id", "inside")
        div2.appendChild(label1);
        div2.appendChild(input1);
        div2.appendChild(label2);
        div2.appendChild(input2);
        div1.appendChild(div2);
            label1.innerText = "Grade:"
}
function remove() {
    document.getElementById("div" + lineGrade).remove() + lineGrade--;
}
let lineGrade = 1;
window.onload = controlbuttons;
function result() {
    let total = 0;
    let finalgrade = 0;
    
    for (let i = 1; i <= lineGrade; i++) {
        let grade = parseInt(document.getElementById("grade" + i).value);
        let weight = parseInt(document.getElementById("weight" + i).value);
        total += grade * weight;
        finalgrade += weight;
    }
    let enter = total / finalgrade;
    enter = Math.round(enter)
    let output = 0;
    if (!isNaN(enter)) {
        output = enter + " %";
        document.getElementById("average").innerText = output;
        if (total / finalgrade <= 50) {
            document.getElementById("amIFailing").innerText = "You're failing";
        } else {
            document.getElementById("amIFailing").innerText = "You're not failing";
        }
    } else {
        alert("Please enter numbers only.")
    }
}
function controlbuttons() {

    let buttonresult = document.getElementById("buttonresult");
    buttonresult.addEventListener("click", result);

    let buttonremove = document.getElementById("buttonremove");
    buttonremove.addEventListener("click", remove);

    let buttonadd = document.getElementById("buttonadd");
    buttonadd.addEventListener("click", add);
}

console.log(lineGrade)