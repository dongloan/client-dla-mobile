import React, { Component } from 'react'

class HomePage extends Component {
    render() {
        // var {location} = this.props;
        return (
            <div>
                <div className="wrapper-top">
                    <div className="wrapper-top__sub">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 wrapper-top__sub__detail">
                                <p>WE WORK TO MAKE IT REAL!</p>
                                <h1>The Complete Toolkit for The Best Online Ecommerce Platform</h1>
                                <div className="button-learn-more">
                                    <button>LEARN MORE</button>
                                </div>

                                <img src="https://assets.website-files.com/5cfd9ec0982a748214f284ac/5e3c2e449072e9331cfb7d35_laptop.png"
                                    className="img-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="star-main-page">
                    <div className="star-main-page__sub">
                        {/* <h1><span>Welcome</span> To DLA REACT JS Page Mobile</h1> */}
                        <h1>
                            <span>D</span>
                            <span> L</span>
                            <span> A</span>
                        </h1>
                    </div>

                    <div className="star star1"></div>
                    <div className="star star2"></div>
                    <div className="star star3"></div>
                    <div className="star star4"></div>
                    <div className="star star5"></div>
                    <div className="star star6"></div>
                    <div className="star star7"></div>
                    <div className="star star8"></div>
                </section>

                <section className="background-detail">
                    <div className="row">
                        <div className="background-detail__img col-md-12">
                            <img
                                src="https://assets.website-files.com/5cfd9ec0982a748214f284ac/5e3c47597654dd5ea57c93e4_top-Laptop-p-500.png" alt="" />
                        </div>
                    </div>
                    <div className="background-detail__sub-detail container">
                        <div className="background-detail__sub-detail-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <h3>Display</h3>
                            <p>15-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution</p>
                        </div>
                        <div className="background-detail__sub-detail-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <h3>Processor</h3>
                            <p> 1.4GHz quad-core Intel Core i5, Turbo Boost up to 3.9GHz, with 128MB of eDRAM </p>
                        </div>
                        <div className="background-detail__sub-detail-1 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <h3>Memory</h3>
                            <p>8GB of 2133MHz LPDDR3 onboard memoryConfigurable to 16GB of memory</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage
