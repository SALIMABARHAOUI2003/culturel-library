prompt('Nom:','nom de visiteur');
prompt('Prénom:','prénom de visiteur');
/* Demo purposes only */
$(".hover").mouseleave(
    function(){
        $(this).removeClass("hover");
    }
);
document.cookie = 'user= SALIMA IBTISSAM ; expires=Monday, 20 DEC 2021 10:05:00 UTC;
path=/index/Citation/livres/Enfant';
alert(document.cookie);
const cookie = document.getElementById('cookie'),
activeBtn = document.getElementById('activeBtn');
activeBtn.addEventListener('click',function(){
    //UTC is time set by the world time standard 
    document.cookie = "cookieBy=InventionTriks; expires="+ new Date(2021, 12, 20).toUTCString();
    //This cookies expires after 30 days
    document.cookie = "Name=Salima; max-age="+60*60*24*30;
    document.cookie = "LastName=Deo; max-age="+60*60*24*30;
     if(document.cookie){
         cookie.classList.add('hide')
     }

})
cookieButton.addEventListener("click",() =>{
    cookieContainer.classList.remove("active");
})
setTimeout( () =>{
    cookieContainer.classList.add("active");
}, 2000);

  



