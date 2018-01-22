export function jokes(state=[],action){
  if(action.type === 'CARREGAJOKE'){
    return action.joke;
  }

  if(action.type === 'CARREGACATEGORIAS') {
  	return action.categories;
  }
  
} 