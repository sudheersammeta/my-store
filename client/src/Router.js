import React from 'react';

import {Switch, Route} from 'react-router-dom';

//import {Services, Resources, ContactUs} from './components';
import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import Services from './components/services';
import Resources from './components/resources';

const Router = () => (
	<Switch>
		<Route exact path="/services/"  component = {Services} />
		<Route exact path="/resources/"  component = {Resources} />
		<Route exact path="/about-us/"  component = {AboutUs} />
		<Route exact path="/contact-us/"  component = {ContactUs} />
	</Switch>
	);

export default Router;