import React from 'react';
import { Link } from "react-router-dom";
import Pager from "../../inc/Pager";
import queryString from 'query-string';

export default class List extends React.Component {

    constructor(){
        super();
        //1

        fetch("http://hi.namoolab.com:8080/api/notice/list")
        .then(response=>{
            return response.json();
        })
        .then(json=>{
            let list = json.list;
            let count = json.count;
            console.log(count);
            let lastPage = Math.floor(count/10) + ((count%10>=0)?1:0);

            this.setState({
                list,
                count,
                lastPage
            });

           // console.log(lastPage);

            //console.log("after list fetch------")
        });
        
        this.state={
            list:[],
            count:0,
            lastPage:0,
            page:1,
            query:"",
            field:"title"
        };
    }
//생성자-랜더-디드마운트-셋스테이트-랜더-디드업데이트-
//랜더다음 디드
//디드가 html끝나면 데이터바인딩(서버에서)
//랜더메소드밑에있는애들이 
    componentDidMount(){//데이터바인딩역할
        //3
        console.log("mount");
    }

    componentDidUpdate(prevProps){//데이터바인딩역할//사용자입력에 따라 데이터를 다시가져오기위해
        //state가 변경되었어
        //3-1

        // if()
        //     break;

        if(prevProps.location.search === this.props.location.search)
            return;


        fetch(`http://hi.namoolab.com:8080/api/notice/list${this.props.location.search}`)
        .then(response=>{
            return response.json();
        })
        .then(json=>{
            let list = json.list;
            let count = json.count;
            console.log(count);
            let lastPage = Math.floor(count/10) + ((count%10>=0)?1:0);

            this.setState({
                list,
                lastPage
            });

            console.log(lastPage);
        });


        console.log("update");
    }

    componentWillUnmount(){//데이터바인딩역할
        //3-2
        console.log("unmount"); 
    }

    render() {//html을 뿌리기만해
        //2
        console.log("list render");
        console.log(this.state.query);

        return <main class="main">
            <h2 class="main title">공지사항</h2>

            <div class="breadcrumb">
                <h3 class="hidden">경로</h3>
                <ul>
                    <li>home</li>
                    <li>고객센터</li>
                    <li>공지사항</li>
                </ul>
            </div>

            <div class="search-form margin-top first align-right">
                <h3 class="hidden">공지사항 검색폼</h3>
                <form class="table-form">
                    <fieldset>
                        <legend class="hidden">공지사항 검색 필드</legend>
                        <label class="hidden">검색분류</label>
                        <select name="f" onInput={(e)=>{this.setState({field:e.target.value})}}>
                            <option value="title">제목</option>
                            <option value="writerId">작성자</option>
                        </select>
                        <label class="hidden">검색어</label>
                        <input type="text" name="q" value={this.state.query} onInput={(e)=>{this.setState({query:e.target.value})}}/>
                        <input class="btn btn-search" type="submit" value="검색" onClick={this.searchButtonClick.bind(this)}/>
                    </fieldset>
                </form>
            </div>

            <div class="notice margin-top">
                <h3 class="hidden">공지사항 목록</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th class="w60">번호</th>
                            <th class="expand">제목</th>
                            <th class="w100">작성자</th>
                            <th class="w100">작성일</th>
                            <th class="w60">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map(n=>{
                            
                            return <tr>
                                        <td>{n.id}</td>
                                        <td class="title indent text-align-left"><Link to={`/customer/notice/${n.id}`}>{n.title}</Link></td>
                                        <td>{n.writerId}</td>
                                        <td>
                                            {n.regDate}
                                        </td>
                                        <td>{n.hit}</td>
                                    </tr>;
                                    })
                     }
                        

                        
                    </tbody>
                </table>
            </div>

            <div class="indexer margin-top align-right">
                <h3 class="hidden">현재 페이지</h3>
                <div><span class="text-orange text-strong">{this.state.page}</span> / {this.state.lastPage} pages</div>
            </div>

            <Pager history={this.props.history} location={this.props.location} count={this.state.count} />

        </main>;
    }

    searchButtonClick(e){
        e.preventDefault();
        // 1.직접 객체를 얻어서 그 속성의 값을 이용하는 방법
        // 1-2.리엑트 방식의 refs를 이용해 객체를 얻어서 그 속성의 값을 ..
        // 3. state를 이용하여 state의 값을 변경하는 코드를 직접 작성하여 2way바인딩을 하는 방법
        let query = queryString.parse(this.props.location.search); 
        let page = query.p || 1;
        console.log(page);
        this.props.history.push(`?p=${page}&f=${this.state.field}&q=${this.state.query}`);
    }
}

