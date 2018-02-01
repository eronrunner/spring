function addInfo(){
    var skillName = prompt("Type new title Info", "new info");
    if(skillName == null || skillName == ""){
        alert("Please, type title !");
    }else {
        var grade = prompt("Type description", "somthing");
        if(grade == null || grade == ""){
            alert("Please. type content!");
        }else {
            var tr = document.createElement("TR");
            tr.innerHTML = "<td>"+skillName+"</td><td>"+grade+"</td>";
            document.getElementById("tableInfo").appendChild(tr) ;
            alert("Add Success !");
        }
    }
}

function deleteInfo(){
    var row = prompt("Type index of row", "1");
    var table = document.getElementById("tableInfo");
    var index = parseInt(row);
    if(isNaN(index) || index > table.children.length - 1 || index <= 0){
        alert("Index invalid !");
    }else {
        index += 1;
        var tr = document.querySelector("#tableInfo > tr:nth-child(" + index + ")");
        table.removeChild(tr);
        alert("Remove Sucess !!");
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("status", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("status");
    var status = document.getElementById(data);
    e.target.innerHTML = "";
    e.target.appendChild(status);
}