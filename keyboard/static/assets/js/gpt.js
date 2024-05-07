const formPerguntaChat = document.getElementById('form-pergunta-chat');
const conversasPassadas = document.getElementById('conversas-passadas');

if (OPENAI_API_KEY === "") {
    document.getElementById('pergunta').innerHTML = "<span style='color: #f00;'>Necessário colocar a chave na API no arquivo custom.js</span>";
}

if (formPerguntaChat) {
    formPerguntaChat.addEventListener("submit", async (e) => {
        e.preventDefault();
        document.getElementById('btn-pergunta-chat').value = "Pesquisando...";
        let pergunta = document.getElementById('campo-pergunta').value;
        document.getElementById('pergunta').innerHTML = pergunta;

        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: pergunta,
                max_tokens: 2048,
                temperature: 0.5
            }),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            const respostaTexto = dados.choices[0].text;
            document.getElementById('resposta').innerHTML = respostaTexto;

            // Adicionar a pergunta e a resposta à lista de conversas passadas
            const item_pergunta = document.createElement('li');
            item_pergunta.innerHTML = `<div><span class="pergunta">${pergunta}</span></div> `;

            const item_resposta = document.createElement('li');
            item_resposta.innerHTML = `</div><span class="resposta">${respostaTexto}</span></div>`;

            conversasPassadas.appendChild(item_pergunta);
            conversasPassadas.appendChild(item_resposta);

            // Opção de voz
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(respostaTexto);
            synth.speak(utterance);
        })
        .catch(() => {
            document.getElementById('resposta').innerHTML = "Sem resposta";
        });

       
        // Limpar o campo de pergunta
        document.getElementById('campo-pergunta').value = "";
        // Substituir o texto do botão para "Enviar"
        document.getElementById('btn-pergunta-chat').value = "Enviar";
    });
}
