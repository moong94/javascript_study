var body = document.body;
var table = document.createElement("table");
var nodelist = []
var win = 1;
var front = [];
var end = [];
for(var i = 0; i <= 24; i++){
    front.push(i + 1);
    console.log(front[i]);
    end.push(i + 26);
    console.log(end[i]);
}
for (var i = 0; i < 100; i++){
    var r = Math.floor((Math.random() * 25));
    var temp = front[r];
    front[r] = front[0];
    front[0] = temp;

    var r = Math.floor((Math.random() * 25));
    var temp = end[r];
    end[r] = end[0];
    end[0] = temp;
}
var nodeEvent = function(e){
    target = e.target;
    if(Number(target.textContent) === win){
        if(win <= 25){
            target.textContent = end[win - 1];       
        }
        else{
            target.textContent = "";
        }
        win += 1;
    }
   
}
var count = 1;
for(var i  = 0; i < 5; i+=1){
    var line = document.createElement("tr");   
    nodelist.push([])
    for(var n = 0; n <5; n+= 1){
        var node = document.createElement("td");
        node.addEventListener("click" , nodeEvent);
        node.textContent = front[count - 1];
        line.append(node);
        nodelist[i].push(node);
        count += 1;
    }
    table.append(line);
}
body.append(table);

