import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Kidswear from './containers/Kidswear';
import Menswear from './containers/Menswear';
import Womenswear from './containers/Womenswear';
import Signin from './components/common/Signin';
import Signup from './components/common/Signup';
import Cart from './containers/Home';
import Shipping from './containers/Shipping';
import Thankyou from './containers/Thankyou';
const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/kids'} component={Kidswear} />
                <Route exact path={'/mens'} component={Menswear} />
                <Route exact path={'/women'} component={Womenswear} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/shipping'} component={Shipping} />
                <Route exact path={'/thankyou'} component={Thankyou} />
            </Switch>
        </>
    );
};
export default Router;
