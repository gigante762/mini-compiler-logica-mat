# mini-compiler-logica-mat
Um mini processador de lógica matemática. Seguindo princípios de compiladores


## Como está 
Até agora ele faz a Ast de expressões simples como essa: qVq^~pCp

sendo traduzida para isso:
<pre>
  qVq^~pCp => qVqA~pCp
  
  
                     C
                     
                V         p
                
             q       A
                 q       ~
                      0    p
              
           
</pre>


## O que falta

Torná-lo capaz de receber procedência por parêntesis e montar uma Ast correta

Processar essa Ast -> penso em transformar tudo para uma expressão que caiba dentro de um eval();

e usar umas funções como 

se(a,b) para mapear o 'aCb (a->b)', 
bicond(a,b) para mapear o 'aBb (a<->b)',

E restante mapear de
V para ||
A para &&
~ para !
                    
 
