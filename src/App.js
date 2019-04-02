import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Calculators from './views/Calculators'
import Home from './views/Home'
import Links from './components/Links'
import DisplayName from './views/DisplayName'
import MUIPlayground from './views/MUIPlayground'
import Navigation from './views/Navigation'



const App = () => {
    return (
        <Router>
            <Navigation />
            <Links />
            <Route exact path={"/"} component={Home} />
            <Route path={"/calculators"} component={Calculators} />
            <Route path={"/display-name/:name?/:surname?"} component={DisplayName} />
            <Route path={"/mui-playground"} component={MUIPlayground} />
        </Router>
    )
}

export default App