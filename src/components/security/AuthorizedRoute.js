import { Component } from "react";
import {Route,Redirect} from 'react-router-dom';
import securityContext from "../../config/SecurityContext";

export default class AuthorizedRoute extends Component{

    render(){
        if(securityContext.userName == null)//사용자가 인증한적이 있느냐 ? 없다면 ?
            return <Redirect to={{//그렇지않다면 너 로그인하고와
                pathname:"/member/login",
                state:{
                    from:this.props.location//로그인페이지에서 다시 돌아올수있도록 정보심어줌
                }
            }} />;
        else
            return <Route {...this.props}/>;

    }
}