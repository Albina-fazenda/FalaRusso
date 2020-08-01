var bleep = new Audio(); 
var alfabeto = ["А", "Б","В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
montaTelaAlfabeto(alfabeto);

function montaTelaAlfabeto(data){
    
    var container=document.getElementById("container");
    container.innerHTML='Aprenda o som das letras <br> do alfabeto Cirílico<br>';
    
for (var index=0; index<data.length; index++) {    

    var botaoLetra=document.createElement('BUTTON');
    botaoLetra.innerHTML=data[index];
    botaoLetra.setAttribute("class", "botaoLetra");
    botaoLetraValue=document.createAttribute("value");
        botaoLetraValue.value=index;
        botaoLetra.setAttributeNode(botaoLetraValue);
        botaoLetra.addEventListener("click", function() {
            oi (this.value);
            });   
    container.appendChild(botaoLetra);          
}; 
};

function oi(num){
if (num == 0){
bleep.src = "http://falarusso.epizy.com/_audios/somA.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>A';
document.getElementById("dicapronuncia").innerHTML = '<br> como em amor';
}
if (num == 1){
bleep.src = "http://falarusso.epizy.com/_audios/somB.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>BE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em bola';
}
if (num == 2){
bleep.src = "http://falarusso.epizy.com/_audios/somW.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>VE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em vegetal';
}
if (num == 3){
bleep.src = "http://falarusso.epizy.com/_audios/somG.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>GUE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em gostar';
}
if (num == 4){
bleep.src = "http://falarusso.epizy.com/_audios/somD.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>DE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em dado';
}
if (num == 5){
bleep.src = "http://falarusso.epizy.com/_audios/somIE.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>IE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em hierarquia';
}
if (num == 6){
bleep.src = "http://falarusso.epizy.com/_audios/somIO.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>IO';
document.getElementById("dicapronuncia").innerHTML = '<br> como em iogurte';
}
if (num == 7){
bleep.src = "http://falarusso.epizy.com/_audios/somJ.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>JE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em jesus';
}
if (num == 8){
bleep.src = "http://falarusso.epizy.com/_audios/somZ.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>Z';
document.getElementById("dicapronuncia").innerHTML = '<br> como em zebra';
}
if (num == 9){
bleep.src = "http://falarusso.epizy.com/_audios/somI.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>I';
document.getElementById("dicapronuncia").innerHTML = '<br> como em Isabel';
}
if (num == 10){
bleep.src = "http://falarusso.epizy.com/_audios/somIC.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>I';
document.getElementById("dicapronuncia").innerHTML = '<br> I breve (curto)';
}
if (num == 11){
bleep.src = "http://falarusso.epizy.com/_audios/somK.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>KA';
document.getElementById("dicapronuncia").innerHTML = '<br> como em casa';
}
if (num == 12){
bleep.src = "http://falarusso.epizy.com/_audios/somL.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>ELE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em luz';
}
if (num == 13){
bleep.src = "http://falarusso.epizy.com/_audios/somM.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>EME';
document.getElementById("dicapronuncia").innerHTML = '<br> como em museu';
}
if (num == 14){
bleep.src = "http://falarusso.epizy.com/_audios/somN.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>ENE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em nata';
}
if (num == 15){
bleep.src = "http://falarusso.epizy.com/_audios/somO.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>Ó';
document.getElementById("dicapronuncia").innerHTML = 'bem aberto como em óculos';
}
if (num == 16){
bleep.src = "http://falarusso.epizy.com/_audios/somP.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>PE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em perna';
}
if (num == 17){
bleep.src = "http://falarusso.epizy.com/_audios/somR.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>R';
document.getElementById("dicapronuncia").innerHTML = '<br> como em arara';
}
if (num == 18){
bleep.src = "http://falarusso.epizy.com/_audios/somS.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>ES';
document.getElementById("dicapronuncia").innerHTML = '<br> como em passo';
}
if (num == 19){
bleep.src = "http://falarusso.epizy.com/_audios/somT.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>TE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em tatu';
}
if (num == 20){
bleep.src = "http://falarusso.epizy.com/_audios/somU.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>U';
document.getElementById("dicapronuncia").innerHTML = '<br> como em uva';
}
if (num == 21){
bleep.src = "http://falarusso.epizy.com/_audios/efe.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>EFE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em faca';
}
if (num == 22){
bleep.src = "http://falarusso.epizy.com/_audios/somX.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>RA';
document.getElementById("dicapronuncia").innerHTML = '<br> como em ralo';
}
if (num == 23){
bleep.src = "http://falarusso.epizy.com/_audios/somTS.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>TSE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em tsunami';
}
if (num == 24){
bleep.src = "http://falarusso.epizy.com/_audios/somTCH.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>TCHE';
document.getElementById("dicapronuncia").innerHTML = '<br> como em tcheco';
}
if (num == 25){
bleep.src = "http://falarusso.epizy.com/_audios/somCH.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>CHA';
document.getElementById("dicapronuncia").innerHTML = '<br> como em chave';
}
if (num == 26){
bleep.src = "http://falarusso.epizy.com/_audios/somCHI.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>CHIA';
document.getElementById("dicapronuncia").innerHTML = '<br> como em chiado';
}
if (num == 27){
bleep.src = "http://falarusso.epizy.com/_audios/somBD.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>""';
document.getElementById("dicapronuncia").innerHTML = "tviordi znak - insere intervalo curto entre as sílabas";
}
if (num == 28){
bleep.src = "http://falarusso.epizy.com/_audios/somY.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>I';
document.getElementById("dicapronuncia").innerHTML = '<br> I curto gutural';
}
if (num == 29){
bleep.src = "http://falarusso.epizy.com/_audios/somBD2.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>""';
document.getElementById("dicapronuncia").innerHTML = 'miarki znak - suaviza a consoante anterior';
}
if (num == 30){
bleep.src = "http://falarusso.epizy.com/_audios/somE.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>É';
document.getElementById("dicapronuncia").innerHTML = '<br> como em café';
}
if (num == 31){
bleep.src = "http://falarusso.epizy.com/_audios/somIU.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>IU';
document.getElementById("dicapronuncia").innerHTML = '<br> como em Iugoslávia';
}
if (num == 32){
bleep.src = "http://falarusso.epizy.com/_audios/somIA.mp3"
document.getElementById("pronuncia").innerHTML = 'Pronuncia:<br>IA';
document.getElementById("dicapronuncia").innerHTML = '<br> como em Iate';
}
bleep.play();
}