import { Component } from "react";
import { connect } from "react-redux";
import securityContext from "../../config/SecurityContext";
import store from "../../reducers/AuthStore"

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            uid:"",
            pwd:""
        };
    }
    
    componentDidMount(){
        for(let k in this.props)
            console.log(k);
    }

    loginButtonClick(e){
        e.preventDefault();

        let {uid, pwd} = this.state;
        console.log(`uid:${uid}, pwd:${pwd}`);

        fetch(`http://hi.namoolab.com:8080/api/member/${uid}`)
        .then(response=>{
            return response.json();
        })
        .then(info=>{//회원정보가져오기
            let {member, authorities} = info;

            if(member == null)//비밀번호가맞는지
                alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            else if(member.pwd != `{noop}${pwd}`)
                alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            else{
                //securityContext.userName = uid;
                //securityContext.authorities = authorities;
                //이 방식을 connect의 dispatch 영역의 함수를 이용하도록 변경
                //store.dispatch({type:1,userName:uid});
                this.props.login(uid);//커넥트라이브러리를쓰면
                
                let returnURL = "/index";
                if(this.props.location.state != undefined)
                    returnURL = this.props.location.state.from;
                
                //redirect로 오지 않았다면(from이 없다)
                this.props.history.push(returnURL);
            }
            //info
            // {
            //     member:{uid, pwd},
            //     authorities:[admin,member,...];
            // }

        });
    }

    render(){
        return <main>
                <h2 className="main title">로그인</h2>
        
                <div className="breadcrumb">
                    <h3 className="hidden">breadlet</h3>
                    <ul>
                        <li>home</li>
                        <li>회원</li>
                        <li>로그인</li>
                    </ul>
                </div>
        
                <div className="margin-top first">
                    <h3 className="hidden">로그인 정보 입력</h3>
                    <form className="login-form" method="post">
                        <fieldset>
                            <legend className="hidden">로그인 폼</legend>
                            <h4>
                                <img src="../images/member/txt-title.png" />
                            </h4>
                            <ul className="login-box">
                                <li>
                                    <label for="uid">아이디</label>
                                    <input type="text" name="username" placeholder="아이디" value={this.state.uid} onInput={(e)=>{this.setState({uid:e.target.value})}} /></li>
                                <li>
                                    <label for="pwd">비밀번호</label>
                                    <input type="password" 	name="password" placeholder="비밀번호" value={this.state.pwd} onInput={(e)=>{this.setState({pwd:e.target.value})}}/></li>
                            </ul>
                            
                            <div className="login-btn-box">
                                <input type="hidden" name="" />
                                <input type="submit" className="btn login-btn" onClick={this.loginButtonClick.bind(this)} style={{width:"100px",height:"20px"}}/>
                            </div>
                            <ul className="login-option">
                                <li>
                                    <span>아이디 또는 비밀번호를 분실하셨나요?</span>
                                    <a href="find-id">
                                        <img alt="ID/PWD 찾기" src="../images/member/btn-find.png" />
                                    </a>
                                </li>
                                <li className="margin-top">
                                    <span>아이디가 없으신 분은 회원가입을 해주세요.</span>
                                    <a href="agree">
                                        <img alt="회원가입" src="../images/member/btn-join.png" />
                                    </a>
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                </div>
        
            </main>;
    }
}

//상태 값이 바뀌었는데 어떻게 할꺼야 ?
const mapStateToProps=(state)=>{//subscribe역할
    return{
        userName:state.userName
    }
}
//당신이 로그인할때 또는 로그아웃 할때 dispatch 할것이 있어 ? 그럼 여기에 함수를 만들어서 호출해
const mapDispatchProps=(dispatch)=>{
    return{//디스패치할때 사용할 함수정의
        login:(uid)=>{
            dispatch({type:1,userName:uid});
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Login);