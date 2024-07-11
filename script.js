function clicou() {
    const text = `Olá mundo, eu me chamo Pablo, este é um teste do meu terminal RobCo. <br><br> Testando... Testando... Testando... Testando... Testando... <br><br> Sua conexão foi bem sucedida! <br><br> Bem-vindo ao terminal Frk RobCo Industries! <br><br> ......................`;
    const textElement = document.getElementById('typewriter-text');
    const audioElement = document.getElementById('typewriter-audio');
    let index = 0;
    const speed = 60; // Velocidade de digitação (em milissegundos)

    // Reset the text content before starting
    textElement.innerHTML = '';

    function typeWriter() {
        if (index === 0) {
            audioElement.play(); // Começa a tocar o áudio quando a digitação começa
        }

        if (index < text.length) {
            // Adiciona caractere atual ao texto, interpretando `<br>` como quebra de linha
            if (text.charAt(index) === '<') {
                const end = text.indexOf('>', index);
                textElement.innerHTML += text.substring(index, end + 1);
                index = end + 1;
            } else {
                textElement.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(typeWriter, speed);
        } else {
            audioElement.pause(); // Para o áudio quando a digitação termina
            audioElement.currentTime = 0; // Reinicia o áudio
        }
    }

    typeWriter();
}
