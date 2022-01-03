/* script2 */
  function requiredElement() {
  if (document.formsaise.nom.value == "" )
  { alert("Le champs de nom est vide");
  document.getElementById("nom").style.backgroundColor='red';
  document.getElementById("nom").focus();
  return false ;}
  if (document.formsaise.prenom.value == "" )
  {alert("Le champs de prenom est vide");
  document.getElementById("prenom").style.backgroundColor='red';
  document.getElementById("prenom").focus();
  return false ;}
  if (document.formsaise.email.value == "" )
  { alert("Le champs de est emailvide");
  document.getElementById("email").style.backgroundColor='red';
  document.getElementById("email").focus();
  return false ;}
  if (document.formsaise.note1.value == "" )
  { alert("Le champs de est M1 vide");
  document.getElementById("note1").style.background = '#CC3300';
  document.getElementById("note1").focus();
  return false ;}
  if (document.formsaise.note2.value == "" )
  { alert("Le champs de est M2 vide");
  document.getElementById("note2").style.background = '#CC3300';
  document.getElementById("note2").focus();
  return false ;}
  if (document.formsaise.note3.value == "" )
  { alert("Le champs de est M3 vide");
  document.getElementById("note3").style.background = '#CC3300';
  document.getElementById("note3").focus();
  return false;}
                              }
  function note1Validate(){
         var n1=document.formsaise.note1.value;
         var numbers = /^[0-9]+$/;
         if ( n1 == "" || (n1<0 || n1>20) || !n1.match(numbers)){
             alert("Erreur!Cette valeur n'est pas valide");
             document.getElementById("note1" ).style.background = '#CC3300 ';
             document.getElementById("note1").focus();
             return false ;}
             }
  function note2Validate(){
          var n2=document.formsaise.note2.value;
          var numbers = /^[0-9]+$/;
          if ( n2 == "" || (n2<0 || n2>20) || !n2.match(numbers)){
              alert("Erreur!Cette valeur n'est pas valide");
              document.getElementById("note2" ).style.background = '#CC3300 ';
              document.getElementById("note2").focus();
              return false ;}
              }
  function note3Validate(){
          var n3=document.formsaise.note3.value;
          var numbers = /^[0-9]+$/;
          if ( n3 == "" || (n3<0 || n3>20) || !n3.match(numbers)){
              alert("Erreur!Cette valeur n'est pas valide");
              document.getElementById("note3" ).style.background = '#CC3300 ';
              document.getElementById("note3").focus();
              return false ;}
              }
  function calculMoyen() {
      var n1=parseFloat(document.getElementById("formsaise").elements["note1"].value);
      var n2=parseFloat(document.getElementById("formsaise").elements["note2"].value);
      var n3=parseFloat(document.getElementById("formsaise").elements["note3"].value);
    if ( !isNaN(n1) || !isNaN(n2) || !isNan(n3)) {
      var total = n1+n2+n3;
          document.getElementById("formsaise").elements["total"].value=total;
      var AVR = (n1+n2+n3)/3;
          document.getElementById("formsaise").elements["AVR"].value=AVR;
            if ((n1+n2+n3)/3 < 10) {
                  document.getElementById("AVR" ).style.background = '#CC3300 ';}
            else {document.getElementById("AVR" ).style.background = '#008000 ';}
    }else {
  alert("Vous devez entrer un nombre !!");
}}
  function nomValidate(){
    var sps=document.formsaise.nom;
    var letters = /^[A-Za-z]+$/;
      if (sps.value.match(letters)) {
           return true;}
      else {
  alert(" Le nom ne doit contenir que des lettres");
}}
  function prenomVlidate(){
    var sps=document.formsaise.prenom;
    var letters = /^[A-Za-z]+$/;
      if (sps.value.match(letters)) {
           return true;}
      else {
  alert(" Le prenom ne doit contenir que des lettres");
    }}
  function checkEmail(email) {
                 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return re.test(email);
             }
  function validateEmail() {
                 var email = document.getElementById("email").value;

                 if (checkEmail(email)) {
                     return true;
                 } else {
                     alert('Adresse e-mail non valide');
                 }
                 return false;
             }
  function validateForm(){
              requiredElement();
             	calculMoyen();
             	nomValidate();
             	prenomValidate();
             	validateEmail();
            alert("Toutes les données sont validées ! Voulez-vous les envoyer au serveur?");}
