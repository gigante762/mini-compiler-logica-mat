
/* Retorna uma array com a tabela verdade e outra com o resultado da proposição, [tv,result] */
function compile(string)
{
    let a = string;
    a = sanitize(a);

    if (!a)
    {
        alert('Algo de errado na operação, cheque os parentesis.')
        return;
    }

   
    a = replace_tokens(a);

    // Seria bom aqui verificar se tem todos os tokens corretos antes de continuar...


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


}



function createTable(trueTable,arrResult)
{
    let table = "<table border=1 id='t'><thead>";
        table += '<tr>';
            let arrVariables = Object.keys(trueTable);
            for (const letra of arrVariables) {
                table += `<th>${letra}</th>`
            }
            table += `<th>${propsicaoel.value}</th>`
        table += '</tr>';
    table += '</thead>';


    let ar = Object.values(trueTable);
    ar[ar.length] = arrResult;


    
    table += '</tbody>';
    for (let i = 0; i < ar[0].length; i++) {
        table += '<tr>';
        for (let j = 0; j < ar.length; j++) {
            table += `<td>${ar[j][i]}</td>`
        } 
        table += '</tr>';
    }
       
    table += '</tbody>';


    return table;
}