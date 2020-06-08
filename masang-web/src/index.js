import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//paginas
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

//-------------------------//
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
//-------------------------//

// const RotaLogin = ({component: Component}) => (
//     <Route 
//         render={ props =>
//             localStorage.getItem("user-masang") !== null  ?
//             (
//                 <Component {...props}/>
//             ) : (
//                 <Redirect 
//                     to={{pathname: "/",state: {from: props.location}}
//                 }
//                 />
//             )
//         }
//     />
// )


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/Cadastro' component={Cadastro} />
                
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();