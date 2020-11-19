var nodeEvent = function(e){
    target = e.target;

    num = target.textContent;

    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            if(nodelist[i][j].textContent == num){
                y = i;
                x = j;
                console.log(y + " " + x);
                leftx = x - 1;
                rightx = x + 1;
                upy = y - 1;
                downy = y + 1;
                if (leftx >= 0 && nodelist[y][leftx].textContent == ""){
                    console.log("1) "  + y + " " + x);
                    var temp = nodelist[y][x].textContent;
                    nodelist[y][x].textContent = nodelist[y][leftx].textContent;
                    nodelist[y][leftx].textContent = temp;
                }              
                else if (rightx < size && nodelist[y][rightx].textContent == ""){
                    console.log("2) "  +y + " " + x);
                    var temp = nodelist[y][x].textContent;
                    nodelist[y][x].textContent = nodelist[y][rightx].textContent;
                    nodelist[y][rightx].textContent = temp;
                }
            
                else if (upy >= 0 && nodelist[upy][x].textContent == ""){
                    console.log("3) "  +y + " " + x);
                    var temp = nodelist[y][x].textContent;
                    nodelist[y][x].textContent = nodelist[upy][x].textContent;
                    nodelist[upy][x].textContent = temp;
                }
                
                else if (downy <size && nodelist[downy][x].textContent == ""){
                    console.log("4) "  +y + " " + x);
                    var temp = nodelist[y][x].textContent;
                    nodelist[y][x].textContent = nodelist[downy][x].textContent;
                    nodelist[downy][x].textContent = temp;
                }
                return;
            }
        }
    }
}


function shuffle_number(){
    var i = 0;
    for(var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            var r1 = Math.floor(Math.random() * (size));
            var r2 = Math.floor(Math.random() * (size));

            var temp = nodelist[r1][r2].textContent;
            nodelist[r1][r2].textContent = nodelist[0][0].textContent;
            nodelist[0][0].textContent = temp;
            i++;
        }
    }
}

function win_check(){

}

function init(){
    shuffle_number();
}

var body = document.body;
var nodelist = [];
var turn = true;
var win = 0;
var win_count = 0;
var size = 5;
var game = document.getElementById("game");
var table = document.createElement("table");
var num = 0;
for(var i = 0; i < size; i++){
    var line = document.createElement("tr");
    nodelist.push([]);
    for(var n = 0; n < size; n++){
        var node = document.createElement("td");
        node.addEventListener("click", nodeEvent);

        if(num == 0){
            node.textContent = "";
        }
        else{
            node.textContent = num;
        }
        line.append(node);
        nodelist[i].push(node);
        num++;
    }
    table.append(line);
}
game.appendChild(table);
body.append(game);
init();