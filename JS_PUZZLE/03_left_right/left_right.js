var leftEvent = function(e){
    if(nodelist[4].textContent % 2 == 1){
        back = 4;
        for(var i = 0; i < 4; i++){
            nodelist[back].textContent = nodelist[back - 1].textContent;
            back--;
        }
        nodelist[0].textContent = Math.floor(Math.random() * 100);
    }
    else{
        life_score--;
        life.textContent = "LIFE : " + life_score;
    }
}
var rightEvent = function(e){
    if(nodelist[4].textContent % 2 == 0){
        back = 4;
        for(var i = 0; i < 4; i++){
            nodelist[back].textContent = nodelist[back - 1].textContent;
            back--;
        }
        nodelist[0].textContent = Math.floor(Math.random() * 100);
    }
    else{
        life_score--;
        life.textContent = "LIFE : " + life_score;
    }
}

function basic_setting(){
    var table = document.createElement("table");
    var game = document.getElementById("game");
    for(var i = 0; i < size; i++){
        var line = document.createElement("tr");
        var node = document.createElement("td");
        node.textContent = Math.floor(Math.random() * 100);
        line.append(node);
        nodelist.push(node);

        table.append(line);
    }
    game.appendChild(table);
    body.append(game);

    var game1 = document.getElementById("button");
    var table1 = document.createElement("table");
    var line = document.createElement("tr");
    var node1 = document.createElement("td");
    var node2 = document.createElement("td");
    node1.addEventListener("click", leftEvent);
    node2.addEventListener("click", rightEvent);
    node1.textContent = "LEFT";
    node2.textContent = "RIGHT";
    table1.append(line);
    line.append(node1);
    line.append(node2);
    game1.appendChild(table1);
    body.append(game1);

    var life = document.getElementById("life");
    life.textContent = "LIFE : " + life_score;
    body.append(life);
}

function init(){
    basic_setting();
}

var body = document.body;
var nodelist = [];
var turn = true;
var win = 0;
var win_count = 0;
var size = 5;
var life_score = 5;
init();