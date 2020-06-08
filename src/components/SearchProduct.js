import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actGetProductNameStore } from './../actions/index';

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onSearch = () => {
        this.props.onGetProductNameSearchStore(this.state.keyword);
        console.log(this.state);
    }

    onChange = (event) => {
        this.setState({
            keyword : event.target.value
        })
    }

    onKeyPress = (event) => {
        if(event.key !== 'Enter') {return;}
        this.props.onGetProductNameSearchStore(this.state.keyword);
    }

    render() {
        var { keyword } = this.state;
        return (
            <div className="product-page-main-super__filter">
                <form action="" className="modal-search-main__sub__form">
                    <input 
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                        name="keyword"
                        value={keyword}
                        id="name" type="text"
                        placeholder="Nhập từ khóa..." 
                        className="field-search" 
                        required="required"
                        data-validation-required-message="Please enter your product."
                    />
                    <Link to="product-list/result">
                        <button
                            onClick={this.onSearch}
                            type="submit"
                            className="search-button w-button">
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProductNameSearchStore: (keyword) => {
            // console.log(keyword);
            dispatch(actGetProductNameStore(keyword))
            // console.log(keyword);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);