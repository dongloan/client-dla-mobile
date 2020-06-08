import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import styleReset from './styleReset';
import styleResetPassword from './styleResetPassword.css';
import axios from 'axios';

class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            cPassword: '',
            update: false,
            isLoading: false,
            errSend: null,
            error: false,
        };
    }

    UNSAFE_componentWillMount() {
        console.log(this.props.match.params.token);
        axios
            .get('http://localhost:5000/reset', {
                params: {
                    resetPasswordToken: this.props.match.params.token,
                },
            })
            .then(response => {
                console.log(response);
                if (response.data.message === 'password reset link a-ok') {
                    this.setState({
                        username: response.data.username,
                        update: false,
                        isLoading: false,
                        error: false,
                    });
                }else if(response.data === 'password reset link is invalid or has expired') {
                    this.setState({
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log('Lỗi : ', error.data);
            });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    fetchResetPassword = async () => {
        try {
            const res = await axios.put('http://localhost:5000/updatePasswordViaEmail', {
                username: this.state.username,
                password: this.state.password,
            });
            const resData = await res.data;
            return new Promise((resolve, reject) => {
                if (resData) {
                    resolve(resData);
                    console.log(resData);
                    if (resData.message === 'password updated') {
                        this.setState({
                            updated: true,
                            error: false,
                            errSend: null,
                        });
                    } else {
                        this.setState({
                            updated: false,
                            error: true,
                            errSend: null,
                        });
                    }
                }
            });
        }
        catch (err) {
            console.log("Lỗi :", err);
        }
    }

    resetPassword = () => {
        const password = this.state.password;
        const rPassword = /^[A-Z]\w+[0-9]$/;
        if (!rPassword.test(password)) {
            this.setState({
                errSend: 'Mật khẩu phải có kí tự hoa đầu và lớn hơn 8 kí tự .'
            });
        } else {
            this.fetchResetPassword();
            setTimeout(() => {
                this.props.history.push('/login');
            }, 3000);
        }          
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const { password, error, updated, errSend } = this.state;

        if (error === true) {
            return (
                <div className="errorReset">
                    <h4>Đã có lỗi xảy ra trong quá trình reset ! Bạn hãy thử lại . </h4>
                    <Link to="/forgot">
                        <p>
                            BACK TO FORGOT
                        </p>
                    </Link>
                </div>
            )
            // } else if (isLoading) {
            //     return (
            //         <div>
            //             <div>Loading user data ...</div>
            //         </div>
            //     )
        } else {
            return (
                <div className={classes.backgroundReset}>
                    <div className={classes.reset}>
                        <Card>
                            <CardContent>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="text-xs-center pb-xs">
                                        <Typography variant="caption">
                                            Reset Mật khẩu
                                        </Typography>
                                    </div>
                                    <TextField
                                        name='password'
                                        id="password"
                                        label="Password"
                                        value={password}
                                        type="password"
                                        className={classes.textField}
                                        onChange={this.handleChange('password')}
                                        fullWidth
                                        margin="normal"
                                        required={true}
                                    />
                                    <br />
                                    <br />
                                    <Button variant="contained" color="primary" fullWidth type="submit" onClick={this.resetPassword}>
                                        Reset
                                    </Button>
                                    <br />
                                    <br />
                                </form>
                                {updated === true && (
                                    <div>
                                        <p>
                                            Mật khẩu của bạn đã được reset thành công ,Xin hãy đăng nhập lại ! Thanks U .
                                        </p>
                                    </div>
                                )}
                                {errSend !== null && <><p style={{ color: 'red' }}>{errSend}</p><br /></>}<br />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        }
    }
}

const withStylesReset = withStyles(styleReset);

export default (withStylesReset)(ResetPassword);