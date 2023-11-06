document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
  
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtenha os valores do formulário
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const email = document.getElementById("email").value;
      const tshirtSize = document.getElementById("tshirt-size").value;
      const category = document.getElementById("category").value;
      const donation = parseFloat(document.getElementById("donation").value);
  
      // Crie um objeto com os dados do formulário
      const registrationData = {
        name: name,
        age: age,
        email: email,
        size: tshirtSize,
        category: category,
        donation: donation,
      };
  
      // Envie os dados para o banco de dados simulado (JSON)
      fetch("http://localhost:3000/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Inscrição bem-sucedida:", data);
          alert("Sua inscrição foi concluída com sucesso.");
        })
        .catch((error) => {
          console.error("Erro ao enviar inscrição:", error);
          alert("Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.");
        });
    });
  });