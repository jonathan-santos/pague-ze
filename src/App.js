import { Switch, Route, withRouter } from 'react-router-dom'

import LoginRedirectRoute from './components/LoginRedirectRoute'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'
import Register from './pages/register'
import Contacts from './pages/contacts'
import Contact from './pages/contact'

function App() {
  return (
    <Switch>
      <LoginRedirectRoute exact path='/' component={Home} />
      <LoginRedirectRoute exact path='/ze' component={Chatbot} />
      <LoginRedirectRoute exact path='/contatos' component={Contacts} />
      <LoginRedirectRoute exact path='/contato/:id' component={Contact} />
      <Route exact path='/entrar' component={Login} />
      <Route exact path='/registrar' component={Register} />
    </Switch>
  );
}

export default withRouter(App);
