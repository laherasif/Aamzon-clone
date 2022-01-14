import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/layout/Header/Header';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" component={}/> */}
        </Switch>
      </Router>

    </div>
  )
}

export default App
