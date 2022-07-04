import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';

import style from './index.less';

import useResponseClinet from '../hook/useResponseHtmlClinet';

import * as Type from '../store/type';

import { size } from "../util/css";
import { lastRecord } from "../util/cache";

console.log(style);
function App({ lock, drop, setLock }) {
    const { w, h } = useResponseClinet();
    return (
        <div style={size(w, h)} className={style.app}>
            <div className={classnames({ [style.rect]: true }, { [style.drop]: drop })}></div>
            <div className={style.screen}></div>
        </div>
    );
};

const mapStateToProps = state => ({
    lock: state.get('lock'),
});
const mapDispatchToProps = dispatch => ({
    setLock: () => dispatch({ type: Type.LOCK, data: true }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);