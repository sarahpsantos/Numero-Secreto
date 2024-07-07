alert('Bem-vindo(a) ao jogo do Número Secreto!');
let numeroMaximo = 5; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número de 0 a ${numeroMaximo}:`);
    if (chute == numeroSecreto){
        break
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; 
    }
}
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
    alert(`Isso ai! Você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
    

    




