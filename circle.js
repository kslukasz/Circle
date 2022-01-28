const player1 = "X";
const player2 = "O";
let counter = 0;
let who = player1;
let table1 = document.querySelectorAll(".button1");
let table2 = ["", "", "", "", "", "", "", "", ""];
let win = "";
let message = document.querySelector(".whoWin");

const con = [
    [0,1,2], [0,3,6], [0,4,8],
    [3,4,5], [1,4,7], [2,4,6],
    [6,7,8], [2,5,8]
]

function draw() {
    if (win=="") {
        let cutTable = table2.filter(arr => {
            return arr != "";
        });
        if (cutTable.length == 9) {
            message.textContent = "REMIS!!!";
        }
    }
}

function check1(klik) {
    if (win == "") {
        if (klik.target.textContent == "") {
            message.textContent = `Teraz ruch ma gracz ${who}`;
            who = counter % 2 ? player1 : player2;
            klik.target.textContent = who;
            table2[Number(klik.target.value)] = who;
            counter++;
            for (i = 0; i < con.length; i++) {
                let c1 = con[i][0];
                let c2 = con[i][1];
                let c3 = con[i][2];
                if (table2[c1] + table2[c2] + table2[c3] == "XXX") {
                    win = player1;
                    message.textContent = `Wygrał gracz ${win}`;
                } else if (table2[c1] + table2[c2] + table2[c3] == "OOO") {
                    win = player2;
                    message.textContent = `Wygrał gracz ${win}`;
                }
            }
            draw();
        }
    }
}
table1.forEach((e) => {
    e.addEventListener("click", check1);
});

