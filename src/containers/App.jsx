import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';

import './index.less';

import useResponseClinet from '../hook/useResponseHtmlClinet';

import { size } from "../util/css";

function App({ lock, drop }) {
    const { w, h } = useResponseClinet();
    useEffect(() => {

    }, [w, h]);
    return (
        <div style={size(w, h)} className="app">
            <div className={classnames({ 'rect': true }, { 'drop': drop })}></div>
        </div>
    );
};

const mapStateToProps = state => ({
    lock: state.get('lock'),
});
export default connect(mapStateToProps)(App);