/* ==========================================================
   🌿 VIDA E ESPERANÇA | SCRIPT.JS
   Interações: menu responsivo, alertas e modo escuro
   ========================================================== */

/* ------------------------------
   MENU HAMBÚRGUER RESPONSIVO
--------------------------------*/
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

/* ------------------------------
   ALERTAS AUTOMÁTICOS (TOASTS)
--------------------------------*/
function mostrarAlerta(mensagem, tipo = 'sucesso') {
  const alerta = document.createElement('div');
  alerta.classList.add('alert', tipo);
  alerta.textContent = mensagem;

  // Adiciona na página
  document.body.appendChild(alerta);

  // Remove automaticamente após 4 segundos
  setTimeout(() => {
    alerta.remove();
  }, 4000);
}

/* Exemplo: exibir alerta automático ao carregar */
window.addEventListener('load', () => {
  console.log('✅ Site Vida e Esperança carregado com sucesso.');
  //mostrarAlerta('Bem-vindo(a) ao Vida e Esperança!', 'sucesso');
});

/* ------------------------------
   MODO ESCURO 🌙
--------------------------------*/
const botaoModoEscuro = document.createElement('button');
botaoModoEscuro.textContent = '🌙';
botaoModoEscuro.classList.add('modo-escuro-btn');

// Estilo do botão flutuante
botaoModoEscuro.style.position = 'fixed';
botaoModoEscuro.style.bottom = '20px';
botaoModoEscuro.style.right = '20px';
botaoModoEscuro.style.background = '#2e7d32';
botaoModoEscuro.style.color = 'white';
botaoModoEscuro.style.border = 'none';
botaoModoEscuro.style.borderRadius = '50%';
botaoModoEscuro.style.width = '48px';
botaoModoEscuro.style.height = '48px';
botaoModoEscuro.style.fontSize = '1.4rem';
botaoModoEscuro.style.cursor = 'pointer';
botaoModoEscuro.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
botaoModoEscuro.style.zIndex = '1000';

document.body.appendChild(botaoModoEscuro);

// Verifica o modo salvo
if (localStorage.getItem('modo') === 'escuro') {
  ativarModoEscuro();
}

botaoModoEscuro.addEventListener('click', () => {
  const modoAtual = document.body.classList.toggle('modo-escuro');
  if (modoAtual) {
    ativarModoEscuro();
    localStorage.setItem('modo', 'escuro');
  } else {
    desativarModoEscuro();
    localStorage.setItem('modo', 'claro');
  }
});

function ativarModoEscuro() {
  document.body.classList.add('modo-escuro');
  botaoModoEscuro.textContent = '☀️';
}

function desativarModoEscuro() {
  document.body.classList.remove('modo-escuro');
  botaoModoEscuro.textContent = '🌙';
}

/* ------------------------------
   ESTILO DO MODO ESCURO (CSS via JS)
--------------------------------*/
const estiloModoEscuro = document.createElement('style');
estiloModoEscuro.innerHTML = `
  body.modo-escuro {
    background-color: #121212;
    color: #f5f5f5;
  }

  body.modo-escuro header,
  body.modo-escuro footer {
    background-color: #1b1b1b !important;
  }

  body.modo-escuro .navbar {
    background-color: #1b1b1b;
  }

  body.modo-escuro .card {
    background-color: #1e1e1e;
    color: #f5f5f5;
  }

  body.modo-escuro .menu li a:hover {
    background-color: #333;
  }

  body.modo-escuro input,
  body.modo-escuro textarea {
    background-color: #222;
    color: #f5f5f5;
    border-color: #444;
  }

  body.modo-escuro .btn {
    background-color: #388e3c;
  }
`;
document.head.appendChild(estiloModoEscuro);

/* ------------------------------
   USO: Para exibir um alerta manual
----------------------------------*/
// mostrarAlerta('Mensagem de sucesso!', 'sucesso');
// mostrarAlerta('Atenção: algo precisa ser revisado.', 'aviso');
// mostrarAlerta('Erro ao enviar formulário.', 'erro');

