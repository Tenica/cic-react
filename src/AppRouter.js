import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './routers/index';
import Contact from './routers/contact';
import About from './routers/about';
import Executives from './routers/executives';
import Constitution from './routers/constitution';
import Blog from './routers/blog'



const AppRouter = () => {
    return <BrowserRouter>
        <div>
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        <Route path="/Executives" component={Executives}/>
        <Route path="/Constitution" component={Constitution}/>
        <Route path="/Blog" component={Blog}/>
        </Switch>
        </div>
        </BrowserRouter>
    
}

export default AppRouter;