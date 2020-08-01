var bleep = new Audio(); 
var text = "";
var i=1;
var perguntaNum=1;
var score=0;
var numeroTentativas=1;
var alfabeto = ["А", "Б","В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
$('.resultadoCerto').hide();
$('.resultadoErrado').hide();
$('.score').hide();
$('.final').hide();
montaTelaAlfabeto(alfabeto);

function montaTelaAlfabeto(data){
        
    $(document).ready(function(){
        $('.container').hide();
        $('.repeticao').hide();
         });

    var container=document.getElementById("container");
       
for (var index=0; index<data.length; index++) {    

    var botaoLetra=document.createElement('BUTTON');
    botaoLetra.innerHTML=data[index];
    botaoLetra.setAttribute("class", "botaoLetra");
    botaoLetraValue=document.createAttribute("value");
        botaoLetraValue.value=index;
        botaoLetra.setAttributeNode(botaoLetraValue);
        //perguntaNum=this.value;
        botaoLetra.addEventListener("click", function() {
            resposta(this.value);
            });   
    container.appendChild(botaoLetra);          
}; 
};

function pergunta(num){
    if (i < 11) {
        i++;
        $(document).ready(function(){
        $('.container').show();
        $('.resultadoErrado').hide();
        $('.resultadoCerto').hide();
        });
   
        perguntaNum=num;
        letraSom(num);
                
        $('.repeticao').show();
        $('.autofalante').hide();
                            
        text = "Esta é a pergunta " + numeroTentativas +" e você acertou " + score +" do total de 10.";
        document.getElementById("score").innerHTML = text;
        $('.score').show();
             
    } else {
    
        $('.container').hide();
        $('.resultadoErrado').hide();
        $('.resultadoCerto').hide();
        $('.autofalante').hide();
        text = "Você acertou " + score + " do total de 10.";
        document.getElementById("score").innerHTML = text;
        $('.score').show();                   
        $('.final').show();       
};
}

function resposta (data){
    
    $('.container').hide();
    $('.score').hide();
       
    if (data == perguntaNum-1){
    bleep.src = "http://falarusso.epizy.com/_audios/CERTO.mp3"
    text = "CERTO!!!! ";
    document.getElementById("resultadoCerto").innerHTML = text;
    $('.resultadoCerto').show();
    $('.repeticao').hide();
    $('.autofalante').show();
    score=score+1;
    numeroTentativas=numeroTentativas+1;
   
    }else{
    bleep.src = "http://falarusso.epizy.com/_audios/ERRADO.mp3"
    text = "ERROU!!!! ";
    document.getElementById("resultadoErrado").innerHTML = text;
    $('.resultadoErrado').show();
    $('.repeticao').hide();
    $('.autofalante').show();
    numeroTentativas=numeroTentativas+1;
    }   
    bleep.play();  
};

function repetir (num){
   
        num=perguntaNum;
        letraSom();     
}

function letraSom(num){

    if (num == 1){
        bleep.src = "http://falarusso.epizy.com/_audios/somA.mp3"
        }
        if (num == 2){
        bleep.src = "http://falarusso.epizy.com/_audios/somB.mp3"
        }
        if (num == 3){
        bleep.src = "http://falarusso.epizy.com/_audios/somW.mp3"
        }
        if (num == 4){
        bleep.src = "http://falarusso.epizy.com/_audios/somG.mp3"
        }
        if (num == 5){
        bleep.src = "http://falarusso.epizy.com/_audios/somD.mp3"
        }
        if (num == 6){
        bleep.src = "http://falarusso.epizy.com/_audios/somIE.mp3"
        }
        if (num == 7){
        bleep.src = "http://falarusso.epizy.com/_audios/somIO.mp3"
        }
        if (num == 8){
        bleep.src = "http://falarusso.epizy.com/_audios/somJ.mp3"
        }
        if (num == 9){
        bleep.src = "http://falarusso.epizy.com/_audios/somZ.mp3"
        }
        if (num == 10){
        bleep.src = "http://falarusso.epizy.com/_audios/somI.mp3"
        }
        if (num == 11){
        bleep.src = "http://falarusso.epizy.com/_audios/somIC.mp3"
        }
        if (num == 12){
        bleep.src = "http://falarusso.epizy.com/_audios/somK.mp3"
        }
        if (num == 13){
        bleep.src = "http://falarusso.epizy.com/_audios/somL.mp3"
        }
        if (num == 14){
        bleep.src = "http://falarusso.epizy.com/_audios/somM.mp3"
        }
        if (num == 15){
        bleep.src = "http://falarusso.epizy.com/_audios/somN.mp3"
        }
        if (num == 16){
        bleep.src = "http://falarusso.epizy.com/_audios/somO.mp3"
        }
        if (num == 17){
        bleep.src = "http://falarusso.epizy.com/_audios/somP.mp3"
        }
        if (num == 18){
        bleep.src = "http://falarusso.epizy.com/_audios/somR.mp3"
        }
        if (num == 19){
        bleep.src = "http://falarusso.epizy.com/_audios/somS.mp3"
        }
        if (num == 20){
        bleep.src = "http://falarusso.epizy.com/_audios/somT.mp3"
        }
        if (num == 21){
        bleep.src = "http://falarusso.epizy.com/_audios/somU.mp3"
        }
        if (num == 22){
        bleep.src = "http://falarusso.epizy.com/_audios/efe.mp3"
        }
        if (num == 23){
        bleep.src = "http://falarusso.epizy.com/_audios/somX.mp3"
        }
        if (num == 24){
        bleep.src = "http://falarusso.epizy.com/_audios/somTS.mp3"
        }
        if (num == 25){
        bleep.src = "http://falarusso.epizy.com/_audios/somTCH.mp3"
        }
        if (num == 26){
        bleep.src = "http://falarusso.epizy.com/_audios/somCH.mp3"
        }
        if (num == 27){
        bleep.src = "http://falarusso.epizy.com/_audios/somCHI.mp3"
        }
        if (num == 28){
        bleep.src = "http://falarusso.epizy.com/_audios/somBD.mp3"
        }
        if (num == 29){
        bleep.src = "http://falarusso.epizy.com/_audios/somY.mp3"
        }
        if (num == 30){
        bleep.src = "http://falarusso.epizy.com/_audios/somBD2.mp3"
        }
        if (num == 31){
        bleep.src = "http://falarusso.epizy.com/_audios/somE.mp3"
        }
        if (num == 32){
        bleep.src = "http://falarusso.epizy.com/_audios/somIU.mp3"
        }
        if (num == 33){
        bleep.src = "http://falarusso.epizy.com/_audios/somIA.mp3"
        };

        bleep.play();
}