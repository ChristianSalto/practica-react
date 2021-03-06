import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLogin } from '../../services/api';
import { Button, Layout, Input, FieldContainer, FieldTitle, FieldError } from '../register/StyleRegister';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: ""
        }
    }


    handleLogin = async (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        const { data } = await getLogin(username.value, password.value);
        sessionStorage.setItem("success", data.success);
        if (data.success) {
            this.setState({ success: data.success });
            this.props.history.push('/listAds');
        } else {
            this.setState({ error: "Sorry, but this user doesn't exist" });
            setTimeout(() => this.setState({ error: "" }), 5000);
        }
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleLogin} className="login-container">
                    <FieldTitle className="login-title"><h1>Login</h1></FieldTitle>
                    <FieldContainer className="input-login">
                        <label htmlFor="username">Username</label>
                        <Input type="text" name="username" className="login-input" placeholder="Username" required />
                    </FieldContainer>

                    <FieldContainer className="input-login">
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" className="login-input" placeholder="Password" required />
                    </FieldContainer>
                    <FieldContainer>
                        <Button type="submit" className="login-btn">Login</Button>

                        <Link to="/">
                            <Button secundary type="button">I'm not registered</Button>
                        </Link>
                    </FieldContainer>
                    <FieldError className="error">{this.state.error}</FieldError>
                </form>
            </Layout>
        );
    }
}


export default Login; 