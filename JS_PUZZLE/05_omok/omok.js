

var nodeEvent = function (e) {
    target = e.target;
    if (turn == true) {
        if (target.textContent == "") {
            target.textContent = "○";
            turn = false;
        }
    } else {
        if (target.textContent == "") {
            target.textContent = "●";
            turn = true;
        }
    }
    check_win();
}
function check_win() {
  
    // 가로 1
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "○" &&
                nodelist[i][j + 1].textContent === "○" &&
                nodelist[i][j + 2].textContent === "○" &&
                nodelist[i][j + 3].textContent === "○" &&
                nodelist[i][j + 4].textContent === "○") {

                console.log("p1 win");
            }
        }
    }
 // 가로 2
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "●" &&
                nodelist[i][j + 1].textContent === "●" &&
                nodelist[i][j + 2].textContent === "●" &&
                nodelist[i][j + 3].textContent === "●" &&
                nodelist[i][j + 4].textContent === "●") {

                console.log("p2 win");
            }
        }
    }
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 10; j++) {
            if (nodelist[i][j].textContent === "○" &&
                nodelist[i + 1][j ].textContent === "○" &&
                nodelist[i + 2][j ].textContent === "○" &&
                nodelist[i + 3][j ].textContent === "○" &&
                nodelist[i + 4][j ].textContent === "○") {

                console.log("p1 win");
            }
        }
    }

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 10; j++) {
            if (nodelist[i][j].textContent === "●" &&
                nodelist[i + 1][j ].textContent === "●" &&
                nodelist[i + 2][j ].textContent === "●" &&
                nodelist[i + 3][j ].textContent === "●" &&
                nodelist[i + 4][j ].textContent === "●") {

                console.log("p2 win");
            }
        }
    }

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "○" &&
                nodelist[i + 1][j + 1].textContent === "○" &&
                nodelist[i + 2][j + 2].textContent === "○" &&
                nodelist[i + 3][j + 3].textContent === "○" &&
                nodelist[i + 4][j + 4].textContent === "○") {

                console.log("p1 win");
            }
        }
    }

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "●" &&
                nodelist[i + 1][j + 1].textContent === "●" &&
                nodelist[i + 2][j + 2].textContent === "●" &&
                nodelist[i + 3][j + 3].textContent === "●" &&
                nodelist[i + 4][j + 4].textContent === "●") {

                console.log("p2 win");
            }
        }
    }

    for (var i = 9; i > 3; i--) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "○" &&
                nodelist[i - 1][j + 1].textContent === "○" &&
                nodelist[i - 2][j + 2].textContent === "○" &&
                nodelist[i - 3][j + 3].textContent === "○" &&
                nodelist[i - 4][j + 4].textContent === "○") {

                console.log("p1 win");
            }
        }
    }

    for (var i = 9; i > 3; i--) {
        for (var j = 0; j < 6; j++) {
            if (nodelist[i][j].textContent === "●" &&
                nodelist[i - 1][j + 1].textContent === "●" &&
                nodelist[i - 2][j + 2].textContent === "●" &&
                nodelist[i - 3][j + 3].textContent === "●" &&
                nodelist[i - 4][j + 4].textContent === "●") {

                console.log("p2 win");
            }
        }
    }

}

var turn = true;
var body = document.body;
var table = document.createElement("table");
var nodelist = []
var count = 0;

for (var i = 0; i < 10; i += 1) {
    var line = document.createElement("tr");
    nodelist.push([])
    for (var n = 0; n < 10; n += 1) {
        var node = document.createElement("td");
        node.addEventListener("click", nodeEvent);
        node.textContent = "";
        line.append(node);
        nodelist[i].push(node);
    }
    table.append(line);
}
body.append(table);


