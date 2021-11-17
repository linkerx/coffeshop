import app from './app';

const main = async () => {
    await app.listen(3000,() => {
        console.log('Servidor funcionando en puerto 3000');
        console.log('Environment: '+ process.env.NODE_ENV);
    })
}

main();
