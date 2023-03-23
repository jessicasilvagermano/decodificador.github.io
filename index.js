const btnDescriptografar = document.getElementById("btnDescriptografar");
const btnCriptografar = document.getElementById("btnCriptografar");
var result = document.getElementById("result").value;
var myString = document.getElementById("campodetexto").value;



function Criptografar() {

    myString = document.getElementById("campodetexto").value.replace(/e/gi, 'enter').replace(/o/gi, 'ober').replace(/i/gi, 'imer').replace(/u/gi, 'ufat').replace(/a/gi, 'ai')
    document.getElementById("result").value = myString
    document.getElementById("campodetexto").value = "";
};
btnCriptografar.addEventListener('click', Criptografar);



function Descriptografar() {
    var myStringAtual1 = document.getElementById("result").value.replace(/enter/gi, "e").replace(/ober/gi, 'o').replace(/imer/gi, 'i').replace(/ufat/gi, 'u').replace(/ai/gi, 'a')
    document.getElementById("campodetexto").value = myStringAtual1;
    console.log(myStringAtual1)
    document.getElementById("result").value = "";

}

btnDescriptografar.addEventListener('click', Descriptografar);

const btnCopiar = document.getElementById("btnCopiar")

btnCopiar.addEventListener('click', () => {
    var result = document.getElementById("result").value;
    var myString = document.getElementById("campodetexto").value;

    if (result) {
        document.getElementById("result").select()
        const copiei= navigator.clipboard.writeText(result)
       
    }
    if (myString) {
        document.getElementById("campodetexto").select()
        const copiei1= navigator.clipboard.writeText(myString)
    } 
    if(result == "" && myString == "")
    {
        alert("Digite o texto que quer copiar!")
    }
    

});

