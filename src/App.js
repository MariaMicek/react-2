import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Calculators from './views/Calculators'
import Home from './views/Home'
import Links from './components/Links'


const App = () => {
    return (
        <Router>
            <Links />
            <Route exact path={"/"} component={Home} />
            <Route path={"/calculators"} component={Calculators} />
        </Router>
    )
}

export default App