// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Botão "Voltar ao topo"
const btnTopo = document.createElement("button");
btnTopo.innerText = "↑";
btnTopo.id = "btn-topo";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.fontSize = "20px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";
btnTopo.style.backgroundColor = "#007bff";
btnTopo.style.color = "#fff";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "999";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Validação de formulário
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      e.preventDefault();
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido.");
      e.preventDefault();
      return;
    }

    alert("Mensagem enviada com sucesso!");
  });
}

// Modo escuro
const btnDark = document.getElementById("toggle-dark");
if (btnDark) {
  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      btnDark.innerText = "☀️ Modo Claro";
      btnDark.classList.remove("btn-outline-light");
      btnDark.classList.add("btn-outline-warning");
    } else {
      btnDark.innerText = "🌙 Modo Escuro";
      btnDark.classList.remove("btn-outline-warning");
      btnDark.classList.add("btn-outline-light");
    }
  });
}
