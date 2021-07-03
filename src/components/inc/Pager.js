import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

export default class Pager extends React.Component{

    render(){
        let query = queryString.parse(this.props.location.search); // ?p=1&q=&f=title   
             
        let page = query.p||1;//현재페이지
        let count = this.props.count;

        let startPage = page - (page-1)%5;
        let lastPage = Math.floor(count/10) + ((count%10>0)?1:0);

        let prevLink ="";
        
        if(startPage===1)
            prevLink = <span className="btn btn-prev" onClick={()=>{alert('이전 페이지가 없습니다.');}}>이전</span>;
        else 
            prevLink= <Link className="btn btn-next" to={`?p=${startPage-1}&t=&q=`}>이전</Link> ;


        let nextLink ="";

        console.log(lastPage >= startPage+5);

        if(lastPage >= startPage+5)//마지막번호가 start+5보다 크면
            nextLink = <Link className="btn btn-next" to={`?p=${startPage+5}&t=&q=`}>다음</Link>;//마지막페이지가 이것보다 같거나 크면되지
        else 
            nextLink = <span className="btn btn-next" onClick={()=>{alert('다음 페이지가 없습니다.')}}>다음</span>;

        return <div className="margin-top align-center pager">
        <div>
            {prevLink}           
        </div>

        <ul className="-list- center">
            {
                //new Array(5).fill(1).map
                [1,1,1,1,1].map((v,i)=>{

                    let current = "";
                    if(page==i+startPage)//현재페이지 번호하고 반복되는 숫자
                        current = "orange";

                    return <li><Link className={`-text- ${current} bold`}
                                        to={`?p=${i+startPage}&f=&q=`}>{i+startPage}</Link></li>;
                })
            }
        </ul>

        <div>
            {nextLink}
        </div>
    </div>;
    }
}