import {createStore} from 'redux';
import AuthReducer from './AuthReducer';

class AuthStore{
    
    constructor(){
        this.store = createStore(AuthReducer);
    }
}

export default new AuthStore().store;