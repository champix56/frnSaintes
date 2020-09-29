import {createStore} from 'redux';
function reducer(state={produits:[], whoami:'Alex'},action){
    switch(action.type){
        case 'ADD_PRODUCT':
           return {...state, produits:[...state.produits, action.value]};
        default:return state;
    }   
}
//reducer(undefined,{type:'ADD_PRODUCT',value:{name:'produit1'}})
let store=createStore(reducer);
store.subscribe(()=>{console.log(store.getState())});

store.dispatch({type:'ADD_PRODUCT', value:{name:'prod1'}})
store.dispatch({type:'ADD_PRODUCT', value:{name:'prod2'}})
store.dispatch({type:'ADD_PRODUCT', value:{name:'prod2'}})
export default store;
