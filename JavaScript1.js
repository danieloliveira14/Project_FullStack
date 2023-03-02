function Enviar() {

    var nome = document.getElementById("nomeid");
    var tel = document.getElementById("foneid");
    var email = document.getElementById("emailid");
 if (tel.value != "") {
 alert('Obrigado sr(a) ' + nome.value + ' Os seus dados, Tel: '+ tel.value + ' E-mail:' + email.value + '. Foram enviados com Sucesso');
 }
 }
 
 function Trocar() {
 
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    document.getElementById("emailid").value  = nome.value
 }
 