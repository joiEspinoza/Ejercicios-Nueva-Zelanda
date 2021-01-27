
console.log( "Hi by Js" );

////////////////// Ejercicio N1 ////////////////


//--- Multiplicacion sin signo * ---//


const Multiply = ( num1, num2 ) =>
{

    let resultado = 0;

    
    if( Math.sign( num2 ) === -1 )
    {
        num1 = -num1
    };
    

    for ( let i = 0; i < Math.abs( num2 ) ; i++ ) 
    {

        resultado = resultado + num1;

    };

    return resultado;

};


//----------------------------------//




////////////////////////////////////////////////



////////////////// Ejercicio N2 ////////////////


//--- Obtener el numero mayor iterando solo una vez ---//

const theMostBigger = ( array = [] ) => 
( array.reduce( ( acu, numero) => acu > numero ? acu : numero ) )


//----------------------------------//


////////////////////////////////////////////////


////////////////// Ejercicio N3 ////////////////


//--- Eliminar de un arreglo iterando una vez los null, undefine, 0 , false  ---//

const FilterF = ( array = [] ) => ( array.filter( ( dato ) => dato && dato ) );

const FilterF2 = ( array = [] ) => array.reduce( ( acu, dato ) => 
{

        if( dato )
        {
            acu.push( dato );
        };

        return acu;

},[]);


//----------------------------------//


////////////////////////////////////////////////


////////////////// Ejercicio N4 ////////////////


//--- Aplanar elementos a 1 nivel iterando solo una vez ---//

const Flattener = ( array = [] ) => ( array.reduce( ( acu, dato ) =>  acu.concat( dato ) ,[] ) );

//----------------------------------//


////////////////////////////////////////////////


////////////////// Ejercicio N5 ////////////////


//--- Contar la cantidad de veces que se repite una palabra  ---//

const CountWords = ( text ) =>
{

    const textLow = text.toLowerCase();

    const textPurge = textLow.replace( /[%=,!@#]/gi, "" );

    const textArray = textPurge.split( " " );

    let diccionario = {};

    for( let palabra of textArray )
    {

        if( palabra in diccionario )
        {
            ++diccionario[ palabra ];
        }
        else
        {
            diccionario[ palabra ] = 1;
        };

    };

    return  Object.entries( diccionario ).reduce( ( acu, dato ) => acu[ 1 ] > dato[ 1 ] ? acu : dato );
};

//----------------------------------//


////////////////////////////////////////////////


////////////////// Ejercicio N6 ////////////////


//--- Saber si una palabra es un palindromo ---//

const isPalindrome = ( text ) =>
{
    const textChain = text.replace( /[ ]/g, "" ).toLowerCase();

    const textArray = textChain.split( "" );

    const textArrayReverse = textArray.reverse();

    const textReverse = textArrayReverse.join( "" );

    if( textChain === textReverse )
    {
        return `|||${ text } === ${ textReverse }||| is a palindrome`
    }
    else
    {
        return `|||${ text } !== ${ textReverse }||| is not a palindrome`
    };

};

//----------------------------------//


////////////////////////////////////////////////


////////////////// Ejercicio N7 ////////////////


//--- Sumar el contenido de un arreglo  ---//

const plusArray = ( array = [] ) => ( array.reduce( ( acu, dato ) => acu + dato ,0) );

//----------------------------------//


////////////////////////////////////////////////



/////////////////// Ejercicio N8 /////////////////////////


//--- Sumar el contenido de un arreglo donde sus ids sean iguales y eliminar repetidos  ---//


const plusAndRemoveDuplicat = ( array = [] ) => array.reduce( ( acu, element ) => 
{

    const exist = acu.find( ( acuElement ) => acuElement.id === element.id )
    
    if( exist )
    {
        return acu.map( ( acuElement ) => 
        {

            if( acuElement.id === element.id )
            {
                return { ...element, total : acuElement.total + element.total  };
            };

            return acuElement;

        })
    }
    
    
    return [ ...acu, element ];


} ,[]);


//////////////////////////////////////////////////////////



//************************************************************************************************************* */



////////////////// Resultados ////////////////


//--- Multiplicacion sin signo * ---//
console.log( `Result T1 : ${ Multiply( 50, -50 ) }` );


//--- Obtener el numero mayor iterando solo una vez ---//
console.log( `Result T2 : ${ theMostBigger( [ 1,-2,3,4,-5,6,7,-8,9,-10 ] ) }` );


//--- Eliminar de un arreglo iterando una vez los null, undefine, 0 , false  ---//
console.log( `Result T3 : ${ FilterF( [ null, undefined, false, 0, true, 10 ] ) }` );
console.log( `Result T3 : ${ FilterF2( [ null, undefined, false, 0, true, 10 ] ) }` );


//--- Aplanar elementos a 1 nivel iterando solo una vez ---//
console.log( `Result T4 : ${ Flattener( [ 1,2,3,4,[ 5,6,7 ],8,9,[ 10 ] ] ) }` );


//--- Contar la cantidad de veces que se repite una palabra  ---//
const cadena = "A890AS%= HoLa ESTO es, una C4D3N4 que hOla! @# tIeNe quE deIr!,, hOla"; 

console.log( `Result T5` );
console.table( CountWords( cadena ) );


//--- Saber si una palabra es un palindromo ---//
const palindrome = "Amigo no gima";
const notPalindrome = "Hola como estan";

console.log( `Result T6 : ${ isPalindrome( notPalindrome ) }` );
console.log( `Result T6 : ${ isPalindrome( palindrome ) }` );


//--- Sumar el contenido de un arreglo  ---//
console.log( `Result T7 : ${ plusArray( [ 1,2,3,4,5,6,7,8,9 ] ) }` );


//--- Sumar el contenido de un arreglo donde sus ids sean iguales y eliminar repetidos  ---//

const test = 
[

    { id : 1, total : 100 },
    { id : 1, total : 100 },
    { id : 3, total : 300 },
    { id : 4, total : 400 }

];

console.log( "Result T8 : " )
console.log( plusAndRemoveDuplicat( test )  );


////////////////////////////////////////////////