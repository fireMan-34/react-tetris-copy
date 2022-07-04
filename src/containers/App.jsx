import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';

import style from './index.less';

import useResponseClinet from '../hook/useResponseHtmlClinet';
import * as Type from '../store/type';

import Decorate from '../components/decorate';
import KeyBoard from '../components/keyboard';
import Guide from '../components/guide';

import { size } from "../util/css";
import { lastRecord } from "../util/cache";


function App({ lock, drop, setLock }) {
    const { w, h } = useResponseClinet();

    const { css, filling } = size(w, h);
    return (
        <div style={css} className={style.app}>
            <div className={classnames({ [style.rect]: true }, { [style.drop]: drop })}>
                <Decorate />
                <div className={style.screen}>
                    <div className={style.panel}></div>
                </div>
            </div>
            <KeyBoard {...{ filling, }} />
            <Guide />
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