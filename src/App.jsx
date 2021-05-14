import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Login, Home, PointCharge } from './pages';
import AuthProvider, { useAuth } from './context/AuthProvider';

const AuthRoute = (props) => {
	const isAuthenticated = useAuth();
	const location = useLocation();

	if (isAuthenticated) {
		return <Redirect to={location.state.from ?? '/'} />;
	} else {
		return <Route {...props} />;
	}
};

const PrivateRoute = (props) => {
	const isAuthenticated = useAuth();
	if (isAuthenticated) {
		return <Route {...props} />;
	} else {
		return (
			<Redirect
				// ログイン後同じstateへ復帰する用に元stateを指定
				to={{ pathname: '/login', state: { from: props.location.pathname } }}
			/>
		);
	}
};

const App = () => {
	return (
		<Provider {...{ store }}>
			<AuthProvider>
				<BrowserRouter>
					<Switch>
						<AuthRoute exact path="/login" component={Login} />
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute path="/point-charge" component={PointCharge} />
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	);
};
export default App;
