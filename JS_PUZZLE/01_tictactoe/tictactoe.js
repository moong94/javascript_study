var nodeEvent = function(e){
    if(win != 0){
        return;
    }
    target = e.target;
    if(String(target.textContent) === ""){
        if(turn){
            target.textContent = "O";
            turn = false;
            win_count++;
        }
        else{
            target.textContent = "X";
            turn = true;
            win_count++;
        }
        win_check();
    }
}

function win_check(){
    for(var i = 0; i < 3; i++){
        text1 = nodelist[i][0].textContent;
        text2 = nodelist[i][1].textContent;
        text3 = nodelist[i][2].textContent;

        if(text1 == "O" && text2 == "O" && text3 =="O"){
            win = 1;
            console.log(win);
        }
        if(text1 == "X" && text2 == "X" && text3 =="X"){
            win = 2;
            console.log(win);
        }
    }
    
    for(var i = 0; i < 3; i++){
        text1 = nodelist[0][i].textContent;
        text2 = nodelist[1][i].textContent;
        text3 = nodelist[2][i].textContent;

        if(text1 == "O" && text2 == "O" && text3 =="O"){
            win = 1;
            console.log(win);
        }
        if(text1 == "X" && text2 == "X" && text3 =="X"){
            win = 2;
            console.log(win);
        }
    }
    

    text1 = nodelist[0][0].textContent;
    text2 = nodelist[1][1].textContent;
    text3 = nodelist[2][2].textContent;

    if(text1 == "O" && text2 == "O" && text3 =="O"){
        win = 1;
    }
    if(text1 == "X" && text2 == "X" && text3 =="X"){
        win = 2;
    }

    text1 = nodelist[0][2].textContent;
    text2 = nodelist[1][1].textContent;
    text3 = nodelist[2][0].textContent;

    if(text1 == "O" && text2 == "O" && text3 =="O"){
        win = 1;
    }
    if(text1 == "X" && text2 == "X" && text3 =="X"){
        win = 2;
    }

    if(win == 0 && win_count == 9){
        win = 3;
    }
    if(win == 3){
        console.log("무승부");
    }
    else if(win == 1 || win == 2){
        console.log("플레이어"+win+"승리");
    }
}

var body = document.body;
var nodelist = [];
var turn = true;
var win = 0;
var win_count = 0;
var game = document.getElementById("game");
var table = document.createElement("table");
for(var i = 0; i < 3; i++){
    var line = document.createElement("tr");
    nodelist.push([]);
    for(var n = 0; n < 3; n++){
        var node = document.createElement("td");
        node.addEventListener("click", nodeEvent);
        node.textContent = "";
        line.append(node);
        nodelist[i].push(node);
    }
    table.append(line);
}
game.appendChild(table);
body.append(game);