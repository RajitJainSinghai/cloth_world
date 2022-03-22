import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Kidswear from './containers/Kidswear';
import Menswear from './containers/Menswear';
import Womenswear from './containers/Womenswear';
import Signin from './components/common/Signin';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={Signin} />

                <Route exact path={'/kids'} component={Kidswear} />
                <Route exact path={'/mens'} component={Menswear} />
                <Route exact path={'/women'} component={Womenswear} />
            </Switch>
        </>
    );
};
export default Router;
