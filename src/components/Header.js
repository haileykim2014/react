//헤더는 주로데이터바인딩보다는 메인
import { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";


class Header extends Component{

    constructor(){
        super();
        this.state = {
            userName:null
        };
    }

    // componentDidMount(){
    //     store.subscribe(()=>{//스토어가 바뀌었어 ->구독하고있다가 화면갱신
    //         //Header 컴포넌트
    //         //this.setState({userName});
    //         let {userName} = store.getState();
    //         this.setState({userName});
    //         console.log("Header subscribe");
            
    //     });
    // }

    logoutClick(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
    
    console.log("Header render");

    let loginState;

    if(this.props.userName)//유저네임이있으면
        loginState = <Link to="/member/logout" onClick={this.logoutClick.bind(this)}>로그아웃</Link>;
    else
        loginState = <Link to="/member/login">로그인</Link>;

    return <header id="header">
    
    <div className="content-container">
        {/*<!-- ---------------------------<header>--------------------------------------- -->*/}

        <h1 id="logo">
            <Link to="/">
                <img src="/images/logo.png" alt="뉴렉처 온라인" />
            </Link>
            
        </h1>

        <section>
            <h1 className="hidden">헤더</h1>

            <nav id="main-menu">
                <h1>메인메뉴</h1>
                <ul>
                    <li><a href="/guide">학습가이드</a></li>

                    <li><a href="/course">강좌선택</a></li>
                    <li><a href="/answeris/index">AnswerIs</a></li>
                </ul>
            </nav>

            <div className="sub-menu">

                <section id="search-form">
                    <h1>강좌검색 폼</h1>
                    <form action="/course">
                        <fieldset>
                            <legend>과정검색필드</legend>
                            <label>과정검색</label>
                            <input type="text" name="q"/>
                            <input type="submit"/>
                        </fieldset>
                    </form>
                </section>

                <nav id="acount-menu">
                    <h1 className="hidden">회원메뉴</h1>
                    <ul>
                        <li><a href="/index.html">HOME</a></li>
                        <li>{loginState}</li>
                        <li><a href="/member/agree.html">회원가입</a></li>
                    </ul>
                </nav>

                <nav id="member-menu" className="linear-layout">
                    <h1 className="hidden">고객메뉴</h1>
                    <ul className="linear-layout">
                        <li><Link to="/admin/index"><img src="/images/txt-mypage.png" alt="마이페이지" /></Link></li>
                        <li><Link to="/customer/notice/list"><img src="/images/txt-customer.png" alt="고객센터" /></Link></li>
                    </ul>
                </nav>

            </div>
        </section>

    </div>
    
</header>;}
};
//상태 값이 바뀌었는데 어떻게 할꺼야 ?
const mapStateToProps=(state)=>{
    return{
        userName:state.userName
    }
}
//당신이 로그인할때 또는 로그아웃 할때 dispatch 할것이 있어 ? 그럼 여기에 함수를 만들어서 호출해
const mapDispatchProps=(dispatch)=>{
    return{//디스패치할때 사용할 함수정의
        logout:()=>{
            dispatch({type:2});
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Header);