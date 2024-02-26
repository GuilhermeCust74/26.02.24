// ceria uma variavel denominada tempoFilme e atribui um valor de 60 a ela
var tempoFilme = 60; //em segundos

// ceria uma variavel denominada inicioFilme e atribui um valor de 0 a ela
var inicioFilme = 0; //em segundos

//for(usada para loop) a variavel denominada t recebe o valor de 0, e se ela for menor que tempoFilme 't++' adiciona t  a cada loop até q se iguala a tempoFilme
for (var t = 0; t < tempoFilme; t++) {
   
    
setTimeout(function() { 
        
        
 console.clear();
        
        
 console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos");
        
        
inicioFilme++;
    
    
},t*1000);

}