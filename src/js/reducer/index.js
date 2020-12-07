import { v4 as uuidv4 } from 'uuid';

const initState = {
    todos : [
        {
            id:uuidv4(),
            description:'Redux course',
            isDone: true,
            isImportant:false,
        },
        {
            id:uuidv4(),
            description:'Clone netflix web app with React',
            isDone: false,
            isImportant:true
        }
    ],
    filter : 'all',
    searchValue:""
}

export default function rootReducer(state = initState, action) {
    switch(action.type){
        case 'ADD_TODO' : 
            return {
                ...state,
                todos : [...state.todos,{id:uuidv4(),description:action.payload,isDone:false,isImportant:false}]
            };
        case 'TOGGLE_DONE' : 
            let newtodos = [...state.todos];
            const index = newtodos.map(elem=>elem.id).indexOf(action.payload)
            newtodos[index].isDone = !newtodos[index].isDone 
            return {...state, todos :newtodos}
        case 'TOGGLE_IMPORTANT' : 
            let newtodoz = [...state.todos];
            let indexx = newtodoz.map(elem=>elem.id).indexOf(action.payload)
            newtodoz[indexx].isImportant = !newtodoz[indexx].isImportant 
            return {...state, todos :newtodoz}    
        case 'DELETE_TODO' :
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'FILTER' :
            return{
                ...state,
                filter : action.payload
            }
        case 'SEARCH_VALUE' :
                return{
                    ...state,
                    searchValue : action.payload
                }    
        default:
            return state;
    }
}

