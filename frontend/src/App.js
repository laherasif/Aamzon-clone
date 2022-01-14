// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/layout/Header/Header';
import SmallHeader from './component/layout/SmalHeader/SmallHeader';

function App() {
  return (
    <div>
      {/* <Router>
        <Switch>
        <Route path="/" component={}/>
        </Switch>
      </Router> */}

      <Header />
      <SmallHeader/>
      <Home/>
    </div>
  )
}

export default App
