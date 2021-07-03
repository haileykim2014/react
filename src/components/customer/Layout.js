import List from './notice/List'
import Detail from './notice/Detail'
import {Route, Switch} from 'react-router-dom';
import AuthorizedRoute from '../security/AuthorizedRoute'

const Layout = ()=>{
    return 	<div>
		<div id="visual">
			<div className="content-container"></div>
		</div>
		{/*<!-- --------------------------- <body> --------------------------------------- -->*/}
		<div id="body">
			<div className="content-container clearfix">

				<aside className="aside">
					<h1>고객센터</h1>

					<nav className="menu text-menu first margin-top">
						<h1>고객센터메뉴</h1>
						<ul>
							<li><a className="current"  href="/customer/notice">공지사항</a></li>
							<li><a className=""  href="/customer/faq">자주하는 질문</a></li>
							<li><a className="" href="/customer/question">수강문의</a></li>
							<li><a className="" href="/customer/event">이벤트</a></li>
							
						</ul>
					</nav>


					<nav className="menu">
						<h1>협력업체</h1>
						<ul>
							<li><a target="_blank" href="http://www.notepubs.com"><img src="/images/notepubs.png" alt="노트펍스" /></a></li>
							<li><a target="_blank" href="http://www.namoolab.com"><img src="/images/namoolab.png" alt="나무랩연구소" /></a></li>
										
						</ul>
					</nav>
						
				</aside>
				

				{/* main 영역 */}
				<Switch>
					<Route path="/customer/notice/list" component={List} />
					<AuthorizedRoute path="/customer/notice/:id" component={Detail} />					
				</Switch>
			</div>
		</div>
	</div>;
};

export default Layout;