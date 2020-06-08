import React, { Component } from 'react'
import { connect } from 'react-redux';

class GalleryPage extends Component {
    render() {
        return (
            <section className="galery-grid-main">
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird1.jpg" alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed fuga evenietgiat.
                    </p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird2.jpg" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird3.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus vitae quisquam ad dolore hic
                        doloremque.</p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird4.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quo natus perspiciatis.</p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird5.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird6.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolor laboriosam.</p>
                </div>
            </div>
            <div className="galery-grid-main__sub">
                <div className="galery-grid-main__sub__content">
                    <img src="img/gird7.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quia quae numquam!
                    </p>
                </div>
            </div>
        </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products.productList,
    }
}

export default connect(mapStateToProps, null)(GalleryPage);
