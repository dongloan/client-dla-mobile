// import React, { useState } from 'react';
import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styleLogin from './styleLogin';
import { compose } from 'redux';
import axios from 'axios';
import { setUserSession } from './../utils/Common';
import { getToken } from './../utils/Common';

class Login extends Component {
    state = {
        username: "",
        password: "",
        errorLogin: null
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/users/signin', { username: this.state.username, password: this.state.password });
            const resData = await res.data;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (resData) {
                        resolve(resData);
                        // console.log(resData);
                        setUserSession(resData.token, resData.userData);
                        this.props.history.push('/dashboard');
                    } else {
                        reject("Not data");
                    }
                }, 0);
                window.location.reload(); 
            })
        } catch (error) {
            // console.log(error);
            if (error.response.status === 401) {
                this.setState({
                    errorLogin: "Sai username hoặc mật khấu ."
                })
            }
            else {
                this.setState({
                    errorLogin: "Something went wrong. Please try again later."
                });
            }
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
    }

    render() {
        const { classes } = this.props;
        if (getToken() !== null) {
            var { location } = this.props;
            return <Redirect to={{
                pathname: '/dashboard',
                state: {
                    from: location
                }
            }} />
        }
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng Nhập DLA Moblie
                                    </Typography>
                                </div>
                                <TextField
                                    name='username'
                                    id="username"
                                    label="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                    autoComplete="off"
                                    required={true}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    autoComplete="off"
                                    required={true}
                                />
                                <br />
                                {this.state.errorLogin && <><p style={{ color: 'red' }}>{this.state.errorLogin}</p><br /></>}<br />
                                <div className={classes.buttonLogin}>
                                    <Button variant="contained" color="primary" fullWidth type='submit' onClick={this.onLogin}>
                                        Login
                                    </Button>
                                </div>
                                <br />
                                <div className="pt-1 text-md-center">
                                    <Link to="/forgot">
                                        <Button >
                                            Quên mật khẩu
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="pt-1 text-md-center">
                                    <Link to="/register">
                                        <Button >
                                            Đăng kí tài khoản
                                        </Button>
                                    </Link>
                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object,
    required: PropTypes.bool
};

const withStylesLogin = withStyles(styleLogin);

export default compose(withStylesLogin)(Login);


// function Login(props) {
//     const [loading, setLoading] = useState(false);
//     const username = useFormInput('');
//     const password = useFormInput('');
//     const [error, setError] = useState(null); 


//     const handleLogin = () => {
//         setError(null);
//         setLoading(true);
//         axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
//         setLoading(false);
//         setUserSession(response.data.token, response.data.user);
//         }).catch(error => {
//         setLoading(false);
//         if (error.response.status === 401) setError(error.response.data.message);
//         else setError("Something went wrong. Please try again later.");
//         });
//     }

//     if(getToken() !== null) {
//         var {location} = props;
//         return <Redirect to={{
//             pathname : '/',
//             state : {
//                 from : location
//             }
//         }} />
//     }

//     return (
//         <div className={props.classes.background}>
//             <div className={props.classes.login}>
//                 <Card>
//                     <CardContent>
//                         <form >
//                             <div className="text-xs-center pb-xs">
//                                 <Typography variant="caption">
//                                     Đăng Nhập DLA Moblie
//                                     </Typography>
//                             </div>
//                             <TextField
//                                 id="username"
//                                 label="Username"
//                                 {...username}
//                                 className={props.classes.textField}
//                                 fullWidth
//                                 margin="normal"
//                                 autoComplete="off"
//                             />
//                             <TextField
//                                 id="password"
//                                 label="Password"
//                                 {...password}
//                                 className={props.classes.textField}
//                                 type="password"
//                                 fullWidth
//                                 margin="normal"
//                                 autoComplete="off"
//                             />
//                             {error && <> <small style={{ color : 'red' }}>{error}</small></>} <br />
//                             <div className={props.classes.buttonLogin}>
//                                 <Button 
//                                     variant="contained" 
//                                     color="primary" 
//                                     fullWidth 
//                                     type="submit"
//                                     value={loading ? 'Loading...' : 'Login'} 
//                                     disabled={loading}
//                                     onClick={handleLogin}
//                                 >
//                                     Login
//                                 </Button>
//                             </div>
//                             <div className="pt-1 text-md-center">
//                                 <Link to="/register">
//                                     <Button >
//                                         Đăng kí tài khoản
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// }

// const useFormInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     const handleChange = e => {
//         setValue(e.target.value);
//     }

//     return {
//         value,
//         onChange : handleChange
//     }
// }

// Login.propTypes = {
//     classes: PropTypes.object,
// };

// const withStylesLogin = withStyles(styleLogin);

// export default compose(withStylesLogin)(Login);