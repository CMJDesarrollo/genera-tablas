const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                /* .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                }) */
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false
                    }
                })
                .check((argv, options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

console.clear();

/* const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('='); */

//const base = 5;

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
    .catch( err => console.log( err ));


/* console.log('===================');
console.log(`   Tabla del: `);
console.log('===================');

let salida = '';

for ( let i = 1; i <= 10; i++ ){
    salida += (`${ base } x ${ i } = ${ base * i }\n`);
}

console.log( salida );

fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`tabla-${ base }.txt creado`);
}) */