const tbody = document.querySelector("tbody");
sizeSorteios();

function sizeSorteios() {
  let user = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < user.length; i++) {
        if(user[i].token == true){
          for(var j = 1; j < user[i].sorteio.length; j++){
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.innerText = user[i].username;
            td2.innerText = user[i].sorteio[j].result; 
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
          }
          return;  
        }
    }
    return;
}