
import * as pages from 'pages'
import './App.css'
import {
  Switch,
  Route
} from "react-router-dom"

const App = () => (
  <Switch>
    
    <Route path="/" exact component={pages.MainPage} />

    <Route path="/:page" exact component={pages.MainPage} />

    <Route path="/user/:id/:page" component={pages.UserPage} />

    <Route path="/post/:id" component={pages.PostPage} />
  
  </Switch>
)

export default App