import HomePageComponent from "./pages/homepage/homepage";
import './App.css'
import {Route, Switch} from "react-router-dom";

const HatPage = () => {
    return <div>
        <h1>Hats Page</h1>
    </div>
}

function App() {
  return (
    <div>
      <Switch>
          <Route exact path={'/'} component={HomePageComponent}/>
          <Route path={'/hats'} component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
