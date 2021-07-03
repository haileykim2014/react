const userPrincipal = {
    userName: null,
    authorities: [],
    defaultRole: "ROLE_STUDENT"
}
function AuthReducer(state = userPrincipal, action) {
    switch (action.type) {
        case 1: // 로그인
            return { ...state, userName: action.userName };
        case 2: // 로그아웃
            return { ...state, userName: null };
        default:
            return state;
    }

}
export default AuthReducer;
