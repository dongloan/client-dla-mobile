import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FooterPage extends Component {
    render() {
        return (
            <section className="footer-page-main container-fuild">
                <div className="footer-page-main__sub">
                    <div className="footer-page-main__sub__header">
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-1.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-2.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-3.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__header__img active-img">
                            <h3>BASIC THEMES</h3>
                            <p>CopyRight@ trungdong400</p>
                        </div>
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-4.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-5.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__header__img">
                            <img src="img/image-small-6.jpg" alt="" />
                            <div className="animation-team-icon">
                                <div className="icon-img">
                                    <img src="icon/fb1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr noshade="1px" width="50%" />
                    <div className="footer-page-main__sub__content">
                        <div className="footer-page-main__sub__content__left">
                            <ul>
                                <li><Link to="/">Home</Link>
                                    <div className="underline-hover"></div>
                                </li>
                                <li><Link to="/product-list">Sản Phẩm</Link>
                                    <div className="underline-hover"></div>
                                </li>
                                <li><Link to="/gallery">Gallery</Link>
                                    <div className="underline-hover"></div>
                                </li>
                                <li><Link to="about">My Team</Link>
                                    <div className="underline-hover"></div>
                                </li>
                                <li><Link to="contact">Contact</Link>
                                    <div className="underline-hover"></div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-page-main__sub__content__mid">
                            <div className="footer-page-main__sub__content__mid__sub">
                                <p>1024 CMT8 F11 Quận TB</p>
                                <p><a href=" #">trungdong400@gmail.com</a></p>
                                <p>+84 938 357 307</p>
                                <div className="footer-page-main__sub__content__mid__h5">
                                    <h5>GET IN TOUCH</h5>
                                    <div className="underline-hover footer-h5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-page-main__sub__content__right">
                            <ul>                               
                                <li><img src="icon/github.svg" alt="" /></li>
                                <li><img src="icon/instagram.svg" alt="" /></li>
                                <li><img src="icon/twitter.svg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-page-main__sub__last">
                        <h2>DLA STORE</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default FooterPage;
