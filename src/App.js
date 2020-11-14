import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Chatbot from './pages/chatbot'
import Login from './pages/login'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/ze' component={Chatbot} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
}

export default App;
