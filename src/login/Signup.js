import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styleSignup from './styleSignup';
// import { connect } from 'react-redux';
// import { userPostFetch } from '../actions/login';
import {compose} from 'redux';
import axios from 'axios';

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        cPassword: "",
        isGoing: true,
        errorLogin: null
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    // axios.post('http://localhost:4000/register', {username : this.state.username, password : this.state.password, isGoing : this.state.isGoing, email : this.state.email} )
    // .then(response => {
    //     // console.log(response);
    //     this.setState({
    //         errorLogin : response.data.warning
    //     });       
    // }).catch(err => {
    //     console.log(err);
    // });

    fetchRegister = async () => {
        try {
            const res = await axios.post('http://localhost:5000/register', {username : this.state.username, password : this.state.password, isGoing : this.state.isGoing, email : this.state.email} );
            const resData = await res.data;
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    if(resData){
                        resolve(resData);
                        console.log(resData);
                        this.setState({
                            errorLogin : resData.warning
                        });   
                    }else {
                        reject("NOT DATA REGISTER");
                    }
                },0);
                setTimeout(() => {
                    if(resData.warning === "Tạo tài khoản thành công .")
                    this.props.history.push('/login');
                }, 2000);
            });
        }
        catch (err){
            console.log("Lỗi :", err);
        }
    }

    onRegister = async () => {
        const username = this.state.username;
        const password = this.state.password;
        const cPassword = this.state.cPassword;
        const email = this.state.email; 
        const rEmail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
        const rPassword = /^[A-Z]\w+[0-9]$/;
        if(!username){
            this.setState({
                errorLogin: "Username không được bỏ trống ."
            });
        } else if(username.length <= 4){
            this.setState({
                errorLogin : "Username phải lớn hơn 4 kí tự ."
            });
        } else if(!email){
            this.setState({
                errorLogin: "Email không được bỏ trống ."
            });
        }else if(!rEmail.test(email) || email === null){
            this.setState({
                errorLogin: "Email không hợp lệ ."
            });
        }else if(!rPassword.test(password)){
            this.setState({
                errorLogin: "Mật khẩu phải gồm ký tự hoa đầu và hơn 8 chữ số ."
            });
        }else if(password !== cPassword) {
            this.setState({
                errorLogin: "Mật khẩu không trùng khớp ."
            });
        }else{
            this.fetchRegister();
        }      
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng Kí Tài Khoản DLA Moblie
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
                                    required={true}
                                />
                                <TextField
                                    name='email'
                                    id="email"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
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
                                <TextField
                                    id="cpassword"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    name='cPassword'
                                    type="password"
                                    value={this.state.cPassword}
                                    onChange={this.handleChange}
                                    fullWidth
                                    margin="normal"
                                    autoComplete="off"
                                    required={true}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="agree" />}
                                    label="Đồng ý điều khoản"
                                    className={classes.fullWidth}
                                    name="isGoing"
                                    type="checkbox"
                                    checked={this.state.isGoing}
                                    onChange={this.handleChange}
                                />
                                {this.state.errorLogin && <><p style={{ color: 'red' }}>{this.state.errorLogin}</p><br /></>}<br />
                                <Button variant="contained" color="primary" fullWidth type="submit" onClick={this.onRegister}>
                                    Đăng kí
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button>
                                            Đã có tài khoản .
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

Signup.propTypes = {
    classes: PropTypes.object,
    required : PropTypes.bool,
    checked : PropTypes.bool,
};

// const mapStateToProps = state => {
//     return {
//         userInfo : state.loginUser
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
//   })

const withStylesSignup = withStyles(styleSignup);

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    // withConnect,
    withStylesSignup
)(Signup);