var bleep = new Audio(); 
var score=0;
var numeroTentativas=1;
$('.final').hide();   

function startQuiz (myData){
    
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', "https://raw.githubusercontent.com/Albina-fazenda/Substantivo/master/substantivo.json");
    myRequest.onload = function() {
    var myData=JSON.parse(myRequest.responseText);
    sorteio(myData); 
 
    };
    
    myRequest.send();
};

function sorteio (data) {    
    $('.score').hide(); 
    $('.pergunta').hide();  
    $('.proximaPergunta').hide();  
    $('.container').hide(); 
    $('.resultadoCerto').hide();
    $('.resultadoErrado').hide(); 
    
    var i=0;
    var questao=[];
    document.getElementById("score").innerHTML="Esta é a pergunta " + numeroTentativas +" e você acertou " + score +" do total de 5.";
    $('.score').show();  
    console.log(data);
        do{   

            if(i==0){                
                var indexArray = Math.floor(Math.random() * data.length);
                var perguntaEscolhida = data[indexArray].substantivo ;
                bleep.src = "http://falarusso.epizy.com/_audios/"+data[indexArray].som +".wav";
                bleep.play();
                var respostaCerta = data[indexArray].traducao;
                questao.push(respostaCerta);
                $('.start').hide();
                document.getElementById("pergunta").innerHTML="";
                //document.getElementById("pergunta").innerHTML = data[indexArray].substantivo + "<br>";
                $('.pergunta').show();  
                var autofalante=document.createElement('BUTTON');  
                autofalante.setAttribute("class", "autofalante");
                autofalante.setAttribute("type", "image");
                var perguntaContainer=document.getElementById("pergunta");
                perguntaContainer.appendChild(autofalante);
                
                autofalante.addEventListener("click", function() {
                    bleep.play();
                    });   
                data.splice(indexArray,1);
                
            }

            if(i>0 & i<8){
                var indexArray = Math.floor(Math.random() * data.length);
                var respostaEscolhida = data[indexArray].traducao;
                questao.push(respostaEscolhida);
                data.splice(indexArray,1);

            }        
            i++;          
        }
        while( i < 8); 

        for(ii = 0; ii != 8; ii++){
            var i = Math.floor(Math.random() * questao.length);
            var botaoResposta=document.createElement('BUTTON');
            botaoResposta.innerHTML=questao[i];
            botaoResposta.setAttribute("class", "botaoResposta"); 
            botaoRespostaValue=document.createAttribute("value");
            botaoRespostaValue.value=questao[i];
            botaoResposta.setAttributeNode(botaoRespostaValue);
            botaoResposta.addEventListener("click", function() {
                resposta(this.value, respostaCerta);
                });                             
            container.appendChild(botaoResposta);                
            $('.container').show(); 
            questao.splice(i,1);
        };
};

function resposta (data, resp){ 

if (numeroTentativas<6){

    proximaPergunta.innerHTML="";

    if (String(data)===String(resp)) {
        
        $('.pergunta').hide();  
        $('.score').hide();  
        text = "CERTO!!!! ";
        bleep.src = "http://falarusso.epizy.com/_audios/CERTO.mp3"
        document.getElementById("resultadoCerto").innerHTML = text;
        $('.resultadoCerto').show();
        $('.proximaPergunta').show(); 
        container.innerHTML="";
        $('.container').hide();          
        var botaoProximaPergunta=document.createElement('BUTTON');
        botaoProximaPergunta.innerHTML="Proxima pergunta";
        botaoProximaPergunta.setAttribute("class", "botaoProximaPergunta"); 
        botaoProximaPergunta.addEventListener("click", function() {
            startQuiz();
            });                             
        proximaPergunta.appendChild(botaoProximaPergunta);  
        numeroTentativas=numeroTentativas+1;
        score=score+1;   
        
    } else {
        
        $('.pergunta').hide(); 
        $('.score').hide(); 
        bleep.src = "http://falarusso.epizy.com/_audios/ERRADO.mp3"
        text = "ERROU!!!! ";
        document.getElementById("resultadoErrado").innerHTML = text; 
        $('.resultadoErrado').show();
        $('.proximaPergunta').show(); 
        container.innerHTML="";
        $('.container').hide();        
        var botaoProximaPergunta=document.createElement('BUTTON');
        botaoProximaPergunta.innerHTML="Proxima pergunta";
        botaoProximaPergunta.setAttribute("class", "botaoProximaPergunta"); 
        botaoProximaPergunta.addEventListener("click", function() {
            startQuiz();
            });                             
        proximaPergunta.appendChild(botaoProximaPergunta);
        numeroTentativas=numeroTentativas+1;
    };
    bleep.play(); 
};

if (numeroTentativas===6){

    if (String(data)===String(resp)) {
        $('.pergunta').hide();  
        text = "CERTO!!!! ";
        document.getElementById("resultadoCerto").innerHTML = text;
        $('.resultadoCerto').show();
        $('.container').hide();
        $('.proximaPergunta').hide();   
        document.getElementById("score").innerHTML="Você acertou " + score + " do total de 5 perguntas feitas.";
        $('.score').show(); 
        final();         
        
    } else {
       
        $('.pergunta').hide(); 
        text = "ERROU!!!! ";
        document.getElementById("resultadoErrado").innerHTML = text; 
        $('.resultadoErrado').show();    
        $('.container').hide(); 
        $('.proximaPergunta').hide();
        document.getElementById("score").innerHTML="Você acertou " + score + " do total de 5 perguntas feitas.";
        $('.score').show();   
        final();  
    };  
};
};
function final (){
    container.innerHTML="";
    $('.final').show();   
    numeroTentativas=1;
    score=0;
    score.innerHTML="";
};