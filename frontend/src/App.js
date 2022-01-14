// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/layout/Header/Header';
import SmallHeader from './component/layout/SmalHeader/SmallHeader';
import Banner from './component/layout/Banner/Banner'
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
      <Banner/>
    </div>
  )
}

export default App
