const URL = window.location.hostname.includes('localhost') 
      ? 'http://localhost:8080'
      : 'Inserir Link do HEroku';

export default {
    URL,
};