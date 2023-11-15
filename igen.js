const arrow = str => str.split('').reverse().join('');
function megfordit() 
{
    const inputElem = document.getElementById('bekeres');
    const szoveg = inputElem.value;
    const forditottSzoveg = arrow(szoveg);
    document.getElementById('eredmeny').innerText = forditottSzoveg;
}