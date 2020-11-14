import { Switch, Route } from 'react-router-dom'

import LoginRedirectRoute from './components/LoginRedirectRoute'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <Switch basename='/login'>
      <LoginRedirectRoute exact path='/' component={Home} />
      <LoginRedirectRoute exact path='/ze' component={Chatbot} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default App;
