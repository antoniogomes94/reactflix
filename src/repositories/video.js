import config from '../config'

const URL_VIDEOS = `${config.URL}/videos`;


function create(objVideo){
    return fetch(`${URL_VIDEOS}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objVideo),
    })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();

        return resposta;
      }
      
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
    create,
}