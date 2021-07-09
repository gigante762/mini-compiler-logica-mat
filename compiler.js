// https://medium.com/@henriquesosa/seja-um-compilador-crie-um-compilador-com-javascript-33a9557c8cdf

/* Passo por todas as letras formando uma array com o informação desse lexema */
function klexer(code) {
    return code.split('')
        .filter(function (t) { return t.length > 0 })
        .map((t) => {
            if (isLetter(t))
                return { type: 'variable', value: t }
            else
                return { type: 'simbol', value: t }

        })
}

function isLetter(str) {
    return str.length === 1 && str.search(/[a-z]/) >= 0;
}

/* 
   Remove os espacos em branco
*/
function sanitize(string) {
    return string.replaceAll(' ', '');
}

/* 
   Converte os -> e <-> em C e B
*/
function replace_tokens(string) {
    tmp = string;
    tmp = tmp.replaceAll('<->', 'B');
    tmp = tmp.replaceAll('->', 'C');
    tmp = tmp.replaceAll('^', 'A'); // A de and, estava bugando
    return tmp;
}

/* funcoes mortas */
/* -> C */
function se(a, b) {
    return (a == true && b == false) ? 0 : 1;
}

/* <-> B */
function bicond(a, b) {
    return (a != b) ? 0 : 1;
}


class Node {
    constructor(value = 0, left = 0, right = 0) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.type = 0
        this.preVal = value;
    }
}

/* Vai gerando o arvore de operações  */
function buildAst(node, caracter)
{
    if (node.value === 0)
        return

    //somente procura se for 0 ou variable
    if (node.type === 'variable' || node.type === 0)
    {
        let i = node.value.search(caracter);

        if (i >= 0) {
            node.type = 'operation';

            let ar = [node.value.substring(0, i), node.value.substring(i + 1,  node.value.length)]
            node.left = new Node(ar[0]);
            node.right = new Node(ar[1]);
            node.value = caracter;
            buildAst(node.left,caracter);
            buildAst(node.right,caracter);
        }
        else
        {
            node.type = 'variable' ;
            return 0;
        }
    }
    else
    {
        buildAst(node.left,caracter);
        buildAst(node.right,caracter);
    }

    
    
}