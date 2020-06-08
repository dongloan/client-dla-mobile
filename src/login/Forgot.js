import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import styleForgot from './styleForgot';
import axios from 'axios';

// const title = {
//     pageTitle : 'Reset mật khẩu',
// };

class Forgot extends Component {
    constructor() {
        super();
        this.state = {
            email : '',
            showError : false,
            messageFromServer : null,
        };
    }

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.email === '') {
            this.setState({
                showError : true,
                messageFromServer : null,
            });
        } else {
            axios 
                .post('http://localhost:5000/forgotPassword', {
                    email : this.state.email,
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data.warning === 'email not in db') {
                        this.setState({
                            showError : false,
                            messageFromServer : response.data.warning,
                        });
                    } else if (response.data === 'recovery mail sent') {
                        this.setState({
                            showError : false,
                            messageFromServer : 'Recovery mail sent ! Please check yourmail .',
                        });
                    }
                })
                .catch (error => {
                    console.log("Lỗi : ", error);
                });
        }
    }

    render() {
        const { classes } = this.props;
        const {email, showError, messageFromServer} = this.state;
        return (
            <div className={classes.backgroundForgot}>
                <div className={classes.forgot}>
                    <Card>
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Reset Mật khẩu
                                    </Typography>
                                </div>
                                <TextField
                                    name='email'
                                    id="email"
                                    label="Email"
                                    value={email}
                                    className={classes.textField}
                                    onChange={this.handleChange('email')}
                                    fullWidth
                                    margin="normal"
                                    required={true}
                                />
                                <br />    
                                {showError === true && messageFromServer === null && <><p style={{ color: 'red' }}>Email không được bỏ trống .</p><br /></>}<br />                         
                                {messageFromServer !== null && <><p style={{ color: 'red' }}>{messageFromServer}</p><br /></>}<br />                             
                                <Button variant="contained" color="primary" fullWidth type="submit" onClick={this.onRegister}>
                                    Gửi
                                </Button>
                                <br />
                                <br />
                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button >
                                            Back to Login
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

const withStylesForgot = withStyles(styleForgot);

export default (withStylesForgot)(Forgot);