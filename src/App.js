import { Switch, Route, withRouter } from 'react-router-dom'

import LoginRedirectRoute from './components/LoginRedirectRoute'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'
import Register from './pages/register'
import Contacts from './pages/contacts'

function App() {
  return (
    <Switch basename='/login'>
      <LoginRedirectRoute exact path='/' component={Home} />
      <LoginRedirectRoute exact path='/ze' component={Chatbot} />
      <LoginRedirectRoute exact path='/contacts' component={Contacts} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default withRouter(App);
