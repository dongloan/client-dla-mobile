import React, { Component } from 'react'

class ShopPage extends Component {
    render() {
        return (
            <section className="shop-page-main container-fuild">
                <div className="shop-page-main__sub container">
                    <div className="shop-page-main__sub__title">
                        <p>WE WORK TO MAKE IT REAL!</p>
                        <h2>Shop by Category</h2>
                    </div>

                    <div className="shop-page-main__sub__product">
                        <div className="shop-page-main__sub__product__1">
                            <h2>Phones</h2>
                            <p>Technology has forever changed the world we live in. We're online, in one way or another, all
                                day long.</p>
                            <button><a href=" #">VIEW ALL</a></button>
                            <img className="img-shop"
                                src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c21932dd211088ed6bcc8_oc.png" alt="" />
                        </div>
                        <div className="shop-page-main__sub__product__1">
                            <h2>Desktop</h2>
                            <p>Technology has forever changed the world we live in. We're online, in one way or another, all
                                day long.</p>
                            <button><a href=" #">VIEW ALL</a></button>
                            <img className="img-shop"
                                src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c2a4834cec746306353a0_MAc%20(1)-p-500.png" alt="" />
                        </div>
                        <div className="shop-page-main__sub__product__1">
                            <h2>Laptops</h2>
                            <p>Technology has forever changed the world we live in. We're online, in one way or another, all
                                day long.</p>
                            <button><a href=" #">VIEW ALL</a></button>
                            <img className="img-shop"
                                src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c2f5d5dad361078fec9a5_LAptop22.png" alt="" />
                        </div>
                        <div className="shop-page-main__sub__product__1">
                            <h2>Tablets</h2>
                            <p>Technology has forever changed the world we live in. We're online, in one way or another, all
                                day long.</p>
                            <button><a href=" #">VIEW ALL</a></button>
                            <img className="img-shop"
                                src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e5c444575d7b260d225290a_ipad2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ShopPage;
