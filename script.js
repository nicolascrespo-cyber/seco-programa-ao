// ALERTA DE COMPRA
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Produto adicionado ao carrinho!");
    });
  });
  
  // CHAT SIMPLES
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  
  chatInput.addEventListener("keypress", e => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const userMsg = document.createElement("p");
      userMsg.textContent = "🧍‍♂️ Você: " + chatInput.value;
      chatBody.appendChild(userMsg);
  
      setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.textContent = "🤖 Vendedor: Obrigado pelo contato! Logo te respondo.";
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 600);
  
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
  