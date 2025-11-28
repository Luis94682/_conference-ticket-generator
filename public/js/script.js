const img = document.querySelector("#profle");
const meuform = document.querySelector("#meuform");
const validEmail = document.querySelector("#validEmail");
const card_pass = document.querySelector("#cardpass");
const input = document.querySelector("#img-fullstack");
const uploadFull = document.getElementById("uploadFull")

input.addEventListener("change", () => {
  const arquivo = input.files[0];
  if (arquivo) {
    const tamanhoKB = arquivo.size / 1024;
    if (tamanhoKB > 900) {
      uploadFull.style.display = "block"
    }
  }
  if (input.files[0]) {
    img.src = URL.createObjectURL(input.files[0]);
    localStorage.setItem("img", img.src);
  }
});

meuform.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.querySelector("#full").value.trim();
  const email = document.querySelector("#campoEmail").value.trim();

  if (email === "") {
    validEmail.style.display = "flex";
    return;
  } else {
    validEmail.style.display = "none";
  }


  localStorage.setItem("email", email);
  localStorage.setItem("nome", nome);

  if (input.files[0]) {
    img.src = URL.createObjectURL(input.files[0]);
    localStorage.setItem("img", img.src);
  }

  alert("Enviado com sucesso!");
  meuform.reset();
  window.location.href = 'card.html';
});
