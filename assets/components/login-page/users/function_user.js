let verify = "user";

function createUser(){
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const confirmasenha = document.getElementById("password2").value;
  
  let user = {
    "username": "",
    "email": "",
    "senha": "",
    "token": false,
    "sorteio": [{
      "result": "",
    }]
  }

  //confirmacao de senha
  if(senha != confirmasenha){
    return alert("Senhas divergentes!")
  }

  user.username = username;
  user.email = email;
  user.senha = senha;

  if(!isKey(verify)) {
    localStorage.setItem(verify, JSON.stringify(user));
    return console.log(user);
  }
  
  if(existingEmail(verify, email)){
    return alert("Email já existente!"); 
  }

  let x = localStorage.length;
  verify = verify + toString(x);
  localStorage.setItem(verify, JSON.stringify(user));
  
  return console.log(user);
}

function loginUser() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  if(!isKey(verify)) {
    return alert("Nenhum registro ainda");
  }

  if(!existingEmail(verify, email)){
    return alert("Conta/email não cadastrado!"); 
  }
  
  return alert(acessAccount(verify, email, senha));
  
}

//Verifica a existência da chave user em localStorage 
function isKey(value) {
  for (var i = 0; i < localStorage.length; i++) {
    for (var j = 0; j < localStorage.length; j++) {
      if(value == localStorage.key(j)){
        return true;
      }
    }
    value = value + toString(i);
  }
  return false
}

//Verifica a existência de um email ja existente na chave user
function existingEmail(value, email) {
  for (var i = 0; i < localStorage.length; i++) {
    let localUser = JSON.parse(localStorage.getItem(value));
    if(localUser.email == email){
      return true;
    }
    value = value + toString(i);
  }
  return false;
}


function acessAccount(value, email, senha) {
  for (var i = 0; i < localStorage.length; i++) {
    let localUser = JSON.parse(localStorage.getItem(value));
    if(localUser.email == email){
      if(localUser.senha == senha){
        localUser.token = true;
        localStorage.setItem(value, JSON.stringify(localUser));
        return localUser;
      }
    }
    value = value + toString(i);
  }
  return null;
}