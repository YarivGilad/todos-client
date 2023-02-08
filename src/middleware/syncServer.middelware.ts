import { Middleware } from 'redux'
import { RootState } from '../state/configure.store'
import { createTask } from '../network/todos.api';

export const syncServer: Middleware<{},RootState> = store => next => action => {
    
    //send an update to the server
    //localStorage.setItem("app_data", JSON.stringify(store.getState()));
    console.log({action});
    switch(action.type){
        case 'todos/addTodo':
            createTask(action.payload as string);
            break;
    }
    
    //change local redux store on the client
    next(action);
}