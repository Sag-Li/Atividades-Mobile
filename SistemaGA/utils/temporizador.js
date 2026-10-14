export const monitorarSincronizacao = (segundos) => {
  let contador = 0;
  const intervalo = setInterval(() => {
    const agora = new Date();
    const proxima = new Date(agora.getTime() + 5000);
    
    console.log(`\nSINCRONIZANDO...`);
    console.log(`ÚLTIMA SINCRONIZAÇÃO: ${agora.toLocaleTimeString()}`);
    console.log(`PRÓXIMA VERIFICAÇÃO: ${proxima.toLocaleTimeString()}`);
    
    contador++;
    if (contador >= segundos) {
      clearInterval(intervalo);
      console.log("Monitoramento encerrado.");
    }
  }, 5000);
};