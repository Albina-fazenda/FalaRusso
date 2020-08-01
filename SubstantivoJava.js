var bleep = new Audio(); 

var myRequest = new XMLHttpRequest();
myRequest.open('GET', "https://raw.githubusercontent.com/Albina-fazenda/Substantivo/master/substantivo.json");
myRequest.onload = function() {
var myData=JSON.parse(myRequest.responseText);
   
montaTela(myData)

};

myRequest.send();

function montaTela(data){
    for (var index=0; index<data.length; index++) {
    
    palavra=data[index].substantivo;
    var tela=document.getElementById("tela");
    
    var botao=document.createElement('BUTTON');
        
        botao.innerHTML=data[index].substantivo;
        botaoValue=document.createAttribute("value");
        botaoValue.value=index;
        botao.setAttributeNode(botaoValue);
        tela.appendChild(botao);
        
        botao.addEventListener("click", function() {
            mostrarTraducao(data, this.value);
                           
            });       
         
    if(data[index].genero==="feminino"){
        
        botao.setAttribute("class", "botoesVermelhos");        
           
    } else if(data[index].genero==="masculino"){
     
        botao.setAttribute("class", "botoesAzuis");       
        
    } else  {
        
        botao.setAttribute("class", "botoesVerdes");   
             
    };
    };
};

function mostrarTraducao(arr, ind){
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0]; 
        var content = document.getElementsByClassName("modal-content")[0];
        modal.style.display = "block";
          

        var traducao = arr[ind].substantivo+ "  em português quer dizer " 
        + arr[ind].traducao + " e em russo é do gênero " 
        + arr[ind].genero + ".";
        
        content.insertAdjacentText('afterbegin', traducao);

        var autofalante=document.createElement('BUTTON');  
        autofalante.setAttribute("class", "autofalante");
        autofalante.setAttribute("type", "image");
        autofalanteValue=document.createAttribute("value");
        autofalanteValue.value=ind;
        autofalante.setAttributeNode(autofalanteValue);
        content.appendChild(autofalante);
        
        autofalante.addEventListener("click", function() {
            ouvirSom(arr, this.value);
                           
            });     

        window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        content.innerHTML=" <br><br>";   
     
    };
  };
        span.onclick = function() {
        modal.style.display = "none";
        content.innerHTML=" <br><br>";     

       
      };

      window.addEventListener("keydown", function() {
       // if (event.keyCode == 13) {
            
            modal.style.display = "none";
            content.innerHTML=" <br><br>";   
      //  };
      });


};

function ouvirSom (arr, ind) {
    bleep.src = "http://falarusso.epizy.com/_audios/"+arr[ind].som +".wav";
    bleep.play();

}