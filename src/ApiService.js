const ApiService = {
  listaAutores: () => {
    return fetch("http://localhost:8000/api/autor").then(res => res.json());
  },

  CadastraAutor: autor => {
    return fetch("http://localhost:8000/api/autor", {
      method: "POST",
      headers: { "content-type": "application/json", body: autor }
    
    }).then(res => res.json());
  },

  ListaNomes: () => {
    return fetch("http://localhost:8000/api/autor/nome").then(res => res.json());
  }
};
export default ApiService;
