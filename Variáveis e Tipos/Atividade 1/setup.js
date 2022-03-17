
// Solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    string.split("").reverse().join("") === string;
}

let myVar = null;

console.log(verificaPalindromo("gato"));

// Solução 2
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for (let i = 0; i < string.lenght; i++){
        if (string[i] !== string[string.lenght - 1 - i]){
            return false;
        }
    }
    return true;
}