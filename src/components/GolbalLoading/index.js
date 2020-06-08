import React, { Component } from 'react'
import loadingIcon from './../../esstes/img/loading.gif';
import './style.css';
import {compose} from 'redux';
import {connect} from 'react-redux';
// import * as uiAction from './../../actions/ui';

class GolbalLoading extends Component {
    render() {
        const {showLoading} = this.props;
        let xhtml = null
        if(showLoading){        // khi showLoading === true
            xhtml = (
                    <div className="loading">
                        <img src={loadingIcon} alt="loading" />
                    </div>
                    )
        };
        return xhtml;
    }
}

const mapStateToProps = state => {
    return {
        showLoading : state.ui.showLoading,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         uiAction : bindActionCreators(uiAction, dispatch)
//     }
// }

const withConnect = connect(mapStateToProps, null);

export default compose(
    withConnect
)(GolbalLoading)

