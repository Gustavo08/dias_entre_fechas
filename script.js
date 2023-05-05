/*  Función que recibe dos fechas, para calcular los dias entre ellos.  */

function daysUntilToDate ( date, final_date ) {

    let date1 = new Date(date);
    let date2 = new Date(final_date);
    let result = parseInt((date2 - date1) / (1000*60*60*24), 10);

    return `${ result } ${ result === 1  ? 'dia': 'dias' }`;
}

let response = daysUntilToDate('2023-05-03', '2023-05-04');
console.log("🚀 ~ file: script.js:13 ~ response:", response)
