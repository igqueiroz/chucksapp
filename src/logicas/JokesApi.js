export default class JokesApi {
    static lista(joke){
      return dispatch => {  
        const requestInfo = {
          method: 'GET',
          mode: 'cors'
        };
        fetch(joke, requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Não rolou comunicação com a API");
                }
            })
            .then(joke => {
              dispatch({type:'CARREGAJOKE',joke});
              return joke;
          }); 

      }

    }
    static listaCategorias(categories){
      return dispatch => {  
        const requestInfo = {
          method: 'GET',
          mode: 'cors'
        };
        fetch(categories, requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Não rolou comunicação com a API");
                }
            })
            .then(categories => {
              dispatch({type:'CARREGACATEGORIAS',categories});
              return categories;
          }); 

      }

    }
}

