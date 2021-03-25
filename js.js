// init
f=[]
f_entrer=[]
// masquer les éléments importants
document.getElementById('div_f').hidden=true
document.getElementById('replay').hidden=true
// valide le nombre n
document.getElementById('valid_n').addEventListener('click',vide)
// valider l'entré n si vide ou non (il était un numbre)
function vide(){
    if(document.getElementById('n').value==''){
        alert('Entrer le numbre de la suite fibonacci pour continuer')
    }else{
        n()
    }
}
// Changer le style et créer un nouveau menu avec une entrée pour permettre à l'utilisateur de saisir les valeurs suivantes
function n(){
    document.getElementById('n').style.backgroundColor='green'
    document.getElementById('valid_n').style.backgroundColor='green'
    document.getElementById('valid_n').disabled=true
    document.getElementById('n').disabled=true
    document.getElementById('div_f').hidden=false
    n=document.getElementById('n').value
    for(i=0;i<n;i++){
        document.getElementById('ul').innerHTML+='<li>F'+i+' <input min="0" value="0" type="number" id="li'+i+'"></li>'
    }
}
// Vérifiez la suite dans laquelle nous stockons les valeurs saisies par l'utilisateur dans le menu "f_enter" et nous appelons la fonction 'calc' pour créer une nouvelle suite qui prend les trois premiers chiffres saisis par l'utilisateur pour créer une nouvelle suite et en suite fait appeler la fonction 'test' pour comparer les deux suite
document.getElementById('valid_f').addEventListener('click',verif)
function verif(){
    f_entrer=[]
    for(i=0;i<n;i++){
        ff=document.getElementById('li'+i).value
        f_entrer.push(Number(ff));
    }
    f_clc()
    test()
}
// Calculez la suite de Fibonacci. Elle prend les trois premiers nombres saisis par l'utilisateur
function f_clc(){
    f0=f_entrer[0]
    f1=f_entrer[1]
    f2=f_entrer[2]
    f.push(f0)
    f.push(f1)
    f.push(f0+f1)
    f.push(f1+f2)
    for(i=4;i<n+1;i++){
        f.push(f[i-1]+f[i-2])
    }
}
// Testez le suite et comparez le groupe généré par l'ordinateur avec celui créé avec vous
function test(){
    t=true
    for(i=0;i<n;i++){
        if(f[i]==f_entrer[i]){
            document.getElementById('li'+i).disabled=true
            document.getElementById('li'+i).style.backgroundColor='green'
        }else{
            t=false
            document.getElementById('li'+i).style.backgroundColor='red'
        }
    }
    if(t){
        document.getElementById('msg').innerHTML='BRAVO'
        document.getElementById('valid_f').hidden=true
        document.getElementById('replay').hidden=false
    }else{
        document.getElementById('msg').innerHTML='ERROR'
    }
}
// Relancer la page pour rejouer le jeu
document.getElementById('replay').addEventListener('click',replay)
function replay(){
    window.location.reload();
}