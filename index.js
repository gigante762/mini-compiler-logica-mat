
function compile(string)
{
   /*  lex = klexer(string);
    console.log(lex); */
}

//let a = '(p->q)^~(qV(~q->(q^p)^q))';
let a = '(p->q)';


a = sanitize(a);
a = replace_tokens(a);
//troco as variáveis
let b = a.replaceAll('p',1);
b = b.replaceAll('q',0);

/* console.log(b);
console.log(tokenize(a));
console.log(toRPN(a));
console.log(calcRPN(toRPN(b))); */

console.log(calcInfix(b));
