import {createStore} from 'redux';

class AuthStore{
    #store

    constructor(){
        this.#store = createStore(this.reducer);
    }

    reducer(state = userPrincipal, action) {
        switch (action.type) {
            case 1: // 로그인
                return { ...state, userName: action.userName };
            case 2: // 로그아웃
                return { ...state, userName: null };
            default:
                return state;
        }

    }

    setState(state){
        this.#store.dispatch(1,state);
    }
    //사용자가 구독하고싶으면
    addListener(callback){
        this.#store.
    }


}

export default new AuthStore();// 