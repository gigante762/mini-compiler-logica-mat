
function compile(string)
{
    let a = string;
    a = sanitize(a);
    a = replace_tokens(a);


    // arrVariables é uma array com as variáveis na ordem em que aparecem
    let arrVariables = getVariables(a);
    //console.log(arrVariables);

    let trueTable = generateTrueTable(arrVariables);

    let arrResults = [];

    for (let iteration = 1; iteration <= 2**arrVariables.length ; iteration++) {
        let b = a;
        for (let letra of arrVariables) {
            b = b.replaceAll(letra, getValueFromTrueTable(trueTable,iteration,letra))
            //console.log(b)
        }

        let resultIteration = calcInfix(b);
        //console.log("REs: ",resultIteration)
        arrResults.push(resultIteration);
    }

    return [trueTable,arrResults]


    //console.log(trueTable);
    //console.log(arrResults);



    //console.log(getValueFromTrueTable(trueTable,iteration,'p'));

    /* for (let letra of arrVariable) {
        console.log();
    }
 */

    //troco as variáveis
   /*  let b = a.replaceAll('p',1);
    b = b.replaceAll('q',0); */

    //let result  =  calcInfix(a);

    //console.log(result);
}