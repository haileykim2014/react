import React from "react"
import { Link } from "react-router-dom";

export default class Detail extends React.Component{

    // this.state
    // this.props : 콤포넌트간의 매개체

    constructor(props){
        super(props);
        //this.props = props;       
        
        //Context 정보를 보고 userName == null 이면
        //너 권한없어 하면서 login으로 리디렉션하기
        

        let id = this.props.match.params.id;
        fetch(`http://hi.namoolab.com:8080/api/notice/${id}`)
        .then(response=>{
            return response.json();
        })
        .then(json=>{
            this.setState({n:json});
        });
        
        this.state={
            n:{}
        };
    }

    componentDidMount(){
        
    }

    render(){
        return <main>
        <h2 class="main title">공지사항</h2>
        
        <div class="breadcrumb">
            <h3 class="hidden">breadlet</h3>
            <ul>
                <li>home</li>
                <li>고객센터</li>
                <li>공지사항</li>
            </ul>
        </div>
        
        <div class="margin-top first">
                <h3 class="hidden">공지사항 내용</h3>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td class="text-align-left text-indent text-strong text-orange" colspan="3">{this.state.n.title}</td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td class="text-align-left text-indent" colspan="3">{this.state.n.regDate}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>newlec</td>
                            <th>조회수</th>
                            <td>148</td>
                        </tr>
                        <tr>
                            <th>첨부파일</th>
                            <td colspan="3"></td>
                        </tr>
                        <tr class="content">
                            <td colspan="4">{this.state.n.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="margin-top text-align-center">
                <Link class="btn btn-list" to="/customer/notice/list">목록</Link>
            </div>
            
            <div class="margin-top">
                <table class="table border-top-default">
                    <tbody>
                        
                        <tr>
                            <th>다음글</th>
                            <td colspan="3"  class="text-align-left text-indent">다음글이 없습니다.</td>
                        </tr>
                                                   
                        
                        
                        <tr>
                            <th>이전글</th>
                            <td colspan="3"  class="text-align-left text-indent"><a class="text-blue text-strong" href="">스프링 DI 예제 코드</a></td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>			
            
    </main>;
    }
}