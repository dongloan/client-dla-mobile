import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actGetProductNameStore } from './../actions/index';
import PropTypes from "prop-types";

class ModalSearch extends Component {
    modal = React.createRef();

    static defaultProps = {
        ...React.Component.defaultProps,
        showSearch: false,
        className: "myModal",
        closeOnEscape: true,
        closeOnClickOutside: true,
        onCloseSearch: () => { }
    };

    static propTypes = {
        showSearch: PropTypes.bool,
        closeOnEscape: PropTypes.bool,
        closeOnClickOutside: PropTypes.bool,
        onCloseSearch: PropTypes.func
    };

    componentDidMount() {
        this.props.closeOnClickOutside &&
            document.addEventListener("mousedown", this.handleClick, false);
        this.props.closeOnEscape &&
            document.addEventListener("keyup", this.handleKeyPress, false);
    }
    handleKeyPress(event) {
        if (event.key === "Escape") {
            this.props.onCloseSearch();
        }
    }
    handleClick = e => {
        if (
            this.modal.current &&
            !this.modal.current.querySelector(".modal-search-main__sub").contains(e.target)
        ) {
            this.props.onCloseSearch();
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    onSearch = () => {
        this.props.onGetProductNameSearchStore(this.state.keyword);
    }

    onChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }

    onKeyPress = (event) => {
        if (event.key !== 'Enter') { return; }
        this.props.onGetProductNameSearchStore(this.state.keyword);
    }
    render() {
        var { keyword } = this.state;
        // var {match} = this.props;
        // console.log(match);
        if (!this.props.showSearch) {
            return null;
        }
        return (
            <div id="modal-search" className="modal-search-main" ref={this.modal}>
                <div className="modal-search-main__sub">
                    <div action="" className="modal-search-main__sub__form">
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
                        <Link to={`/result`}>
                            <button
                                onClick={() => this.onSearch()}
                                type="submit"
                                className="search-button w-button">
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

// ModalSearch.propTypes = {
//     onCloseSearch: PropTypes.func.isRequired,
//     showSearch: PropTypes.bool,
//     children: PropTypes.node
// };

const mapStateToProps = state => {
    return {
        products: state.products.productList
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalSearch);

