import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './components/Menu';
import Login from './login/Login';
import Signup from './login/Signup';
import DashBoard from './DashBoard';
import FooterPage from './pages/FooterPage';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import GolbalLoading from './components/GolbalLoading';
import { CSSTransition } from 'react-transition-group';
import { getToken, removeUserSession, setUserSession, getUser } from './utils/Common';
import ResetPassword from './login/ResetPassword';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadPage: false,
			authLoading: true
		}
	}

	UNSAFE_componentWillMount() {
		const token = getToken();
		// if (!token) {
		// 	return;
		// }
		var user = getUser();
		// if(!user){
		// 	return;
		// }
		// axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
		// 	setUserSession(response.data.token, response.data.userData);
		// 	console.log(response);
		// }).catch(error => {
		// 	// removeUserSession();
		// 	console.log(error);
		// });
		// this.setState({
		// 	loadPage: true
		// })
		axios.request({
			method : 'GET',
			url : `https://node-dla.herokuapp.com/verifyToken?token=${token}`,
			headers : {
				'Authorization': token
			},
			params: {
				user : user
			},
		}).then(response => {
				setUserSession(response.data.token, response.data.userData);
				// console.log(response);
			}).catch(error => {
				removeUserSession();
				console.log(error);
			});
			this.setState({
				loadPage: true
			})
	}
	render() {
		// console.log(this.state);
		return (
			<Router >
				<main>
					<CSSTransition
						in={this.state.loadPage === true}
						timeout={600}
						classNames="app-transition"
						unmountOnExit
					>
						{
							() => <div className="app">
								<GolbalLoading />
								<Menu>
									<Route path="/login" component={Login} />
									<Route path="/register" component={Signup} />
									<Route path="/reset" component={ResetPassword} />
									<Route path="/dashboard" component={DashBoard} />
								</Menu>
								{this.showContentMenu(routes)}
								<FooterPage />
							</div>
						}
					</CSSTransition>
				</main>
			</Router>
		);
	}
	showContentMenu = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				)
			});
		}
		return <Switch>{result}</Switch>;
	}
}

export default App;



// function App() {
// 	const [authLoading, setAuthLoading] = useState(true);
// 	const [loadPage, setLoadPage] = useState(false);

// 	useEffect(() => {
// 		const token = getToken();
// 		if (!token) {
// 			return;
// 		}

// 		axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
// 			setUserSession(response.data.token, response.data.user);
// 			setAuthLoading(false);
// 		}).catch(error => {
// 			removeUserSession();
// 			setAuthLoading(false);
// 		});
// 	}, []);

// 	if (authLoading && getToken()) {
// 		return <div className="content">Checking Authentication...</div>
// 	}

// 	const showContentMenu = (routes) => {
// 		var result = null;
// 		if (routes.length > 0) {
// 			result = routes.map((route, index) => {
// 				return (
// 					<Route
// 						key={index}
// 						path={route.path}
// 						exact={route.exact}
// 						component={route.main}
// 					/>
// 				)
// 			});
// 		}
// 		return <Switch>{result}</Switch>;
// 	}
	
// 	return (
// 		<Router>
// 			<main>
// 				<CSSTransition
// 					in={setLoadPage(true)}
// 					timeout={600}
// 					classNames="app-transition"
// 					unmountOnExit
// 				>
// 					{
// 						() => <div className="app">
// 							<GolbalLoading />
// 							<Menu>
// 								<Route path="/login" component={Login} />
// 								<Route path="/register" component={Signup} />
// 							</Menu>
// 							{showContentMenu(routes)}
// 							<FooterPage />
// 						</div>
// 					}
// 				</CSSTransition>
// 			</main>
// 		</Router>
// 	);
// }

// export default App;

