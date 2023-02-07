const number = 13
const secret = Math.floor(Math.random() * 100) + 1
console.log(secret)

function guess(number, secret){
    if (number === secret)
      return `Parabéns você acertou!!! você inseriu o número: ${number}$ e o número sorteado foi: {secret}` ;
    else  
      return `Tente outra vez, você inseriu o número: ${number} e o número sorteado foi: ${secret}`;
}
console.log(number)
console.log(secret)
console.log(guess(number, secret))