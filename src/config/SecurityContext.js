class SecurityContext{

    #userName;
  

    constructor(){
        this.#userName = null;
    }

    get userName(){
        return this.#userName;
    }
    set userName(value){
        this.#userName = value;
    }

}

export default new SecurityContext();
