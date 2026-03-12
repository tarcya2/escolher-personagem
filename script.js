function escolherPersonagem(personagem) {
    let mensagem;
    switch(personagem) {
        case 'guerreiro':
            mensagem = '⚔️ Você escolheu o Guerreiro! Boa sorte na batalha!';
            break;
        case 'arqueiro':
            mensagem = '🏹 Você escolheu o Arqueiro! Boa sorte na batalha!'
            break;
        case 'mago':
            mensagem = '🧙‍♂️ Você escolheu o Mago! Boa sorte na batalha!'
            break;
        default:
            mensagem = '⚠️ Escolha inválida! ⚠️'
    }
    document.getElementById("mensagem").innerText = mensagem;
}