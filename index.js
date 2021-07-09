
function compile(string)
{
   /*  lex = klexer(string);
    console.log(lex); */
}


// let a = new Node("pCq^pV~qCp^q")
// let a = new Node(0)

/* let a = new Node('pCqCp') // funciona como o esperado
findCharacterAndSplice(a,'C') */

/* let a = new Node('pVqVp') // funciona como o esperado
findCharacterAndSplice(a,'V') */


/* let a = new Node('pCqVp') 
findCharacterAndSplice(a,'C') 
findCharacterAndSplice(a,'V') // perfeito até aqui */


//let a = new Node('pCqVqCp') 
// qVpCp
/* let a = new Node('pCqVqCp') 
buildAst(a,'C')
buildAst(a,'V')
// buildAst(a,'V') // perfeito até aqui  */




/*  //Ele não exerga ^, Vou trocar por A de And
 let a = new Node('pCqVq^~p') 
buildAst(a,'C')
buildAst(a,'V')
buildAst(a,'^') 
let a = new Node('qA~p') 
buildAst(a,'A') */


/* let a = new Node('qA~p') 
buildAst(a,'A') 
buildAst(a,'~')  */


//Ele não exerga ^, Vou trocar por A de And
let a = new Node(replace_tokens( sanitize('qVq^~pCp')) ) 
buildAst(a,'C')
buildAst(a,'V')
buildAst(a,'A')
buildAst(a,'~')

// olhe no console e siga a arvore, está tudo ok
console.log(a);