const payamountbtn = document.querySelector("#pay-amount") as HTMLButtonElement;
const decrementbtn = document.querySelectorAll(
  "#decrement"
) as HTMLButtonElement;
let quantityelement = document.querySelectorAll(
  "#quantity"
) as HTMLInputElement;
const incrementbtn = document.querySelectorAll(
  "#increment"
) as HTMLButtonElement;
const priceelement = document.querySelectorAll("#price") as HTMLSpanElement;
const subtotalelement = document.querySelector("#subtotal") as HTMLSpanElement;
const taxelement = document.querySelector("#tax") as HTMLSpanElement;
const totalelement = document.querySelector("#total") as HTMLSpanElement;

function agregarValor() {
  let contador: any = +1;
  for (let index = 0; index < contador; index++) {
    quantityelement.textContent = contador;
  }

  console.log(contador);
}

decrementbtn.addEventListener("click", agregarValor);
