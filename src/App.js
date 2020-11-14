import { Switch, Route } from 'react-router-dom'

import LoginRedirectRoute from './components/LoginRedirectRoute'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'

function App() {
  return (
    <Switch basename='/login'>
      <LoginRedirectRoute exact path='/' component={Home} />
      <LoginRedirectRoute exact path='/ze' component={Chatbot} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
}

export default App;
