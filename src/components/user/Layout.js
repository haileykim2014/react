import { Route} from 'react-router-dom';
import Index from './Index';
const Layout =() =>{

    return <div>
    <div id="visual">
    <div className="content-container"></div>
    </div>

    <div id="body">
    <div className="content-container clearfix">

        <aside className="aside">
            <h1>Member Page!!</h1>
    
            <nav className="menu text-menu first margin-top">
                <h1>마이페이지</h1>
                <ul>
                    <li><a href="/admin/index.html">회원홈</a></li>						
                    <li><a href="/teacher/index.html">선생님페이지</a></li>
                    <li><a href="/student/index.html">수강생페이지</a></li>
                </ul>
            </nav>
            
            <nav className="menu text-menu">
                <h1>알림관리</h1>
                <ul>						
                    <li><a href="/admin/board/notice/list.html">공지사항</a></li>				
                </ul>
            </nav>
                            
        </aside>
         {/* <!-- --------------------------- main --------------------------------------- --> */}
         <Index/>
         
        
    </div>
    </div>
    </div>;
};
export default Layout;