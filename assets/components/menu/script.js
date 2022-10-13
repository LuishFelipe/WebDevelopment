const addBtn = document.querySelector('.add');
const input = document.querySelector('.inp-grupo');

function removeInput(){
    input.removeChild(this.parentNode);
}

function addInput(){
    const field = document.createElement("input");
    field.type="text";
    field.placeholder = "Insira um valor";

    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";

    btn.addEventListener("click", removeInput)

    const flex = document.createElement("div");
    flex.className = "flex";

    input.appendChild(flex);
    flex.appendChild(field);
    flex.appendChild(btn);

}

addBtn.addEventListener("click", addInput);