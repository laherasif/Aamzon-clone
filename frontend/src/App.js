import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home/Home'
import Wrapper from './component/LayoutWrapper/Wrapper/Wrapper'
import Login from './component/pages/Login/Login';
import SignUp from './component/pages/SignUp/SignUp';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Wrapper>
            <Home />
          </Wrapper>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/product" >
          <Wrapper>
            <Home />
          </Wrapper>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
