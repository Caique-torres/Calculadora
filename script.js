const display = document.getElementById("display");

function adicionar(valor) {
  if (display.value === "0" || display.value === "Erro") {
    display.value = valor;
  } else {
    display.value += valor;
  }
}

function limpar() {
  display.value = "0";
}

function apagar() {
  if (display.value.length <= 1 || display.value === "Erro") {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function porcentagem() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = "Erro";
  }
}

function calcular() {
  try {
    const resultado = eval(display.value);

    if (!isFinite(resultado)) {
      display.value = "Erro";
    } else {
      display.value = resultado;
    }
  } catch {
    display.value = "Erro";
  }
}

document.addEventListener("keydown", (event) => {
  const tecla = event.key;

  if ("0123456789.+-*/".includes(tecla)) {
    adicionar(tecla);
  }

  if (tecla === "Enter" || tecla === "=") {
    calcular();
  }

  if (tecla === "Escape") {
    limpar();
  }

  if (tecla === "Backspace") {
    apagar();
  }

  if (tecla === "%") {
    porcentagem();
  }
});
