
function createUser(){
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const confirmasenha = document.getElementById("password2").value;
  
  let user = {
    username: "",
    email: "",
    senha: "",
    token: false,
    sorteio: [{
      result: "",
    }]
  }
  user.username = username;
  user.email = email;
  user.senha = senha;

  let arrayUser = [];


  //confirmacao de senha
  if(senha != confirmasenha){
    return alert("Senhas divergentes!")
  }

  if(!isKey()) {
    arrayUser.push(user);
    localStorage.setItem("user", JSON.stringify(arrayUser));
    return console.log(user);
  }
  
  if(existingEmail(email)){
    return alert("Email já existente!"); 
  }

  let aux = localStorage.getItem("user");
  let newUser = JSON.parse(aux);
  newUser.push(user);
  localStorage.setItem("user", JSON.stringify(newUser));
}

function loginUser() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  if(!isKey()) {
    return alert("Nenhum registro ainda");
  }

  if(!existingEmail(email)){
    return alert("Conta/email não cadastrado!"); 
  }
  
  return acessAccount(email, senha);
  
}

//Verifica a existência da chave user em localStorage 
function isKey() {
  for (var i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i) == "user"){
      return true
    }
  }
  return false
}

//Verifica a existência de um email ja existente na chave user
function existingEmail(email) {
  var aux = localStorage.getItem("user");
  var userStorage = JSON.parse(aux);
  for (var i = 0; i < userStorage.length; i++) {
    if(userStorage[i].email == email){
      return true;
    }
  }
  return false;
}


function acessAccount(email, senha) {
  var userStorage = JSON.parse(localStorage.getItem("user"));
  for (var i = 0; i < userStorage.length; i++) {
    if(userStorage[i].email == email){
      if(userStorage[i].senha == senha){
        userStorage[i].token = true;
        localStorage.setItem("user", JSON.stringify(userStorage));
        return userStorage[i];
      }
      var error = "senha invalida"
      return error;
    }
  }
}