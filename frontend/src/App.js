import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home/Home'
import Wrapper from './component/LayoutWrapper/Wrapper/Wrapper'
import Login from './component/pages/Login/Login';
import SignUp from './component/pages/SignUp/SignUp';
import Products from './component/layout/Product/Product';
import Cart from './component/layout/Cart/Cart';
import Single from './component/layout/SingleProduct/Single';
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
        <Route exact path="/product" >
          <Wrapper>
            <Products/>
          </Wrapper>
        </Route>
        <Route exact path="/cart" >
          <Wrapper>
            <Cart/>
          </Wrapper>
        </Route>
        <Route exact path="/product" >
          <Wrapper>
            <Single/>
          </Wrapper>
        </Route>
        <Route exact path="/product" >
          <Wrapper>
            <Single/>
          </Wrapper>
        </Route>

      </Switch>
    </Router>
  )
}

export default App
