import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Chatbot from './pages/chatbot'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/ze' component={Chatbot} />
    </Switch>
  );
}

export default App;
