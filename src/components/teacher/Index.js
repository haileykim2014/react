import { Component } from "react";

export default class Index extends Component{

    render(){
        return <main className="main">
        <h2 className="main title">선생님홈</h2>
        
        <div className="breadcrumb">
            <h3 className="hidden">breadlet</h3>
            <ul>
                <li>home</li>
                <li>마이페이지</li>
                <li>홈</li>
            </ul>
        </div>
        
        <div className="margin-top first">
        선생님
     대시보드내용
        </div>
        
        </main>;
    }
}

