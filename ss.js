function requiredElement() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    if(nom== "") {
        alert("Veillez insérer votre Nom");
        document.getElementById("nom").style.backgroundColor="red";
        document.getElementById("nom").focus();
        //nom.focus();
        return false;
        }
        if(prenom == "") {
        alert("Veillez insérer votre Prénom");
        document.getElementById("prenom").style.backgroundColor="red";
        document.getElementById("prenom").focus();
        return false;
        }
        if(email == "") {
        alert("Veillez insérer votre Email");
        document.getElementById("email").style.backgroundColor="red";
        document.getElementById("email").focus();
        return false;
        }
        return true}
        function nomValidate() { 

            var letters = /^[A-Za-z]+$/;
            var nom = document.getElementById("nom");
            if(nom.value.match(letters)) {
            document.getElementById("nom").style.backgroundColor="white";
            return true;
            } else {
            alert('Le nom ne doit contenir que des lettres');
            document.getElementById("nom").style.backgroundColor="red";
            document.getElementById("nom").focus();
            return false;
            }
            }
            function teleFormat(){
                var num = /^[0-9]+$/;
                var tele = document.getElementById("tele");
                if(tele.value.match(num)){
                    document.getElementById("tele").style.backgroundColor="white";
                    return true;
                } else{
                    alert('Le telephone ne doit contenir que des numeros');
                    document.getElementById("tele").style.backgroundColor="red";
                    document.getElementById("tele").focus();
                    return false;
                }
            }
            function prenomValidate() { 

                var letters = /^[A-Za-z]+$/;
                var nom = document.getElementById("prenom");
                if(nom.value.match(letters)) {
                document.getElementById("prenom").style.backgroundColor="white";
                return true;
                } else {
                alert('Le Prenom ne doit contenir que des lettres');
                document.getElementById("prenom").style.backgroundColor="red";
                document.getElementById("prenom").focus();
                return false;
                }
                }
            function validateEmail(champsText){
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(champsText.value.match(mailformat)){
                document.form.email.focus();
                document.getElementById("email").style.backgroundColor="white";
                return true;
                }else{
                alert("Veuillez insérer une adresse email valide!");
                document.getElementById("email").style.backgroundColor="red";
                document.form.email.focus();
                return false;
                }
                }
                function validateForm(){
                    if (!requiredElement()){
                    return false;
                    }
                    else{
                    confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
                    }
                    }