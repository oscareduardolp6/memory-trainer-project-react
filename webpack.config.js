// Esto es un objeto de node que nos permite resolver rutas absolutas 
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const path = require('path'); 


const rulesForStyles = {
    //Para poder usarlos todavía faltaría hacer el npm install style-loader y css-loader 
    test: /\.css$/, 
    use: ['style-loader', 'css-loader']
}

const ruleForJSX = {
    // Para poder dejar el babel listo, primero hay que instalar los modulos en npm
    // npm install @babel/core babel-loader @babel/preset-react --save-dev
    // @babel/core para instalar babel en sí 
    // babel-loader para que trabaje con webpack (supongo)
    // @babel/preset-react para que tenga el preset que le establecimos que es para trabajar con react

    test: /\.js$/, //Los archivos que va a evaluar
    loader: 'babel-loader', //El "programa" que va a usar para transformar el código que no entiende en esos archivos
    options: { // Las opciones que se le van a pasar, en este caso, a babel
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // Esto por defecto es la opción 'classic' que quiere decir que tienes que importa react cuándo lo vas a usar, con 
                    //esta opción, babel detecta cuándo estás usando react y lo incluye automáticamente 
                }
            ]

        ] 
    }
}

const rules = [ruleForJSX, rulesForStyles]

module.exports = {
    // Esto va a estar comentado porque está implicito para webpack
    output:{
        // Esto lo que está haciendo es que usa la variable global de node
        // __dirname y le está diciendo que busque la carpeta build y que resuelva 
        // la ruta estatica hasta esa carpeta, si no se pone esto, se hará a dist por default
        path:  path.resolve(__dirname,'build')
    }, 
    plugins:[
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ], 
    //Loaders
    // Cuando webpack no entiende algo porque no es javascript o algo nativo
    // toca configurar los loaders que son "preprocesadores" que van a traducir 
    // para que webpack pueda entender
    module:{
        // Conjunto de cosas que va a hacer según ciertas condiciones
        rules       
    }, 
    // Las configuraciones de lo que se va a ejecutar cuando hagamos npm run dev
    devServer: {
        open: true, //Abre el navegador automáticamente
        port: 3000, //Le especificamos el puerto por el que queremos que lance el servidor
        compress: true
    }

}