// init
f=[]
f_entrer=[]
// hide inimportant elements
document.getElementById('div_f').hidden=true
document.getElementById('replay').hidden=true
// valide le nombre n
document.getElementById('valid_n').addEventListener('click',n)
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
// valide la suite
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
// Calculez la séquence de Fibonacci. Elle prend les trois premiers nombres saisis par l'utilisateur
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
// tester la suite comparer la suite génerer par le pc avec la suite génerer avec vous
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
// replay
document.getElementById('replay').addEventListener('click',replay)
function replay(){
    window.location.reload();
}