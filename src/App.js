import { Switch, Route, withRouter } from 'react-router-dom'

import LoginRedirectRoute from './components/LoginRedirectRoute'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'
import Register from './pages/register'
import Contacts from './pages/contacts'
import Contact from './pages/contact'
import Finances from './pages/finances'
import NewSpending from './pages/newSpending'
import Start from './pages/start'
import Confirmation from './pages/confirmation'
import Deposit from './pages/deposit'

function App() {
  return (
    <Switch>
      <LoginRedirectRoute exact path='/' component={Home} />
      <LoginRedirectRoute exact path='/ze' component={Chatbot} />
      <LoginRedirectRoute exact path='/contatos' component={Contacts} />
      <LoginRedirectRoute path='/contato/:id' component={Contact} />
      <LoginRedirectRoute exact path='/meu-dinheiro' component={Finances} />
      <LoginRedirectRoute exact path='/novo-gasto' component={NewSpending} />
      <LoginRedirectRoute exact path='/depositar' component={Deposit} />
      <LoginRedirectRoute exact path='/confirmacao/cobranca' component={Confirmation} />
      <LoginRedirectRoute exact path='/confirmacao/pagamento/:id' component={Confirmation} />
      <LoginRedirectRoute exact path='/confirmacao/deposito/:id' component={Confirmation} />
      <Route exact path='/inicio' component={Start} />
      <Route exact path='/entrar' component={Login} />
      <Route exact path='/registrar' component={Register} />
    </Switch>
  );
}

export default withRouter(App);
