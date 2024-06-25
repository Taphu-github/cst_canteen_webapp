import React, { Component, useContext } from "react";
import Customer from "../services/Customer";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../css/login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			email: "",
			password: "",
		};
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.changePasswordHandler = this.changePasswordHandler.bind(this);
		this.validator = this.validator.bind(this);
	}

	componentDidMount() {
		Customer.getCustomer().then((res) => {
			console.log("this works");
			this.setState({ users: res.data });
		});
	}

	validator = (e) => {
		e.preventDefault();
		let emails = "";
		let passwords = "";
		this.state.users.forEach((userarr) => {
			for (let key in userarr) {
				if (`${key}`.match("email")) {
					emails = `${userarr[key]}`;
				}
				if (`${key}`.match("password")) {
					passwords = `${userarr[key]}`;
				}
			}

			if (
				this.state.email.match(emails) &&
				this.state.password.match(passwords)
			) {
				this.props.history.push("/homes");
			}
		});
	};
	changeEmailHandler = (event) => {
		this.setState({ email: event.target.value });
	};

	changePasswordHandler = (event) => {
		this.setState({ password: event.target.value });
	};

	render() {
		return (
			<div className="main-login-container">
				<div className="login-form-bg">
					<div className="header">
						<h3>Login</h3>
					</div>
					<div className="wrapper fadeInDown">
						<div className="formContent">
							<div className="fadeIn first">
								<form className="form">
									<div className="form-group">
										<input
											type="text"
											className="fadeIn second canteen-input"
											onChange={this.changeEmailHandler}
											value={this.email}
											placeholder="enter your email"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className="fadeIn third canteen-input"
											onChange={this.changePasswordHandler}
											value={this.password}
											placeholder="enter your password"
										/>
									</div>
									<button
										style={{ marginTop: 20 }}
										className="fadeIn fourth"
										onClick={this.validator}
									>
										Login
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
