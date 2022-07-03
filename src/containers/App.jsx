import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import style from './index.less';

import useResponseClinet from '../hook/useResponseHtmlClinet';

function App({ lock }) {
    const [author, setauthor] = useState('noname');

    const { w, h } = useResponseClinet();

    useEffect(() => {
        (async function () {
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            setauthor("fireMan-34");
        })();
    }, []);
    return (
        <div>
            <h2>App</h2>
            <p><span>作者：</span>{author}</p>
            {"w:" + w}{"h:" + h}
        </div>
    );
};

const mapStateToProps = state => ({
    lock: state.get('lock'),
});
export default connect(mapStateToProps)(App);