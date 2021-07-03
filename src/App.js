import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import CustomerLayout from './components/customer/Layout';
import MemberLayout from './components/member/Layout';
import AdminLayout from './components/admin/Layout';
import TeacherLayout from './components/teacher/Layout';
import UserLayout from './components/user/Layout';
import AuthorizedRoute from './components/security/AuthorizedRoute';


function App() {
  return (
    <Router>
    <div>

      <Header/>

      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/index" component={Index}/>
        <Route path="/customer" component={CustomerLayout} />
        <Route path="/member" component={MemberLayout} />
        <AuthorizedRoute path="/admin" component={AdminLayout} />
        <AuthorizedRoute path="/teacher" component={TeacherLayout} />
        <AuthorizedRoute path="/user" component={UserLayout} />
      </Switch>

      <Footer/>
    </div>
    </Router>);
}

export default App;
