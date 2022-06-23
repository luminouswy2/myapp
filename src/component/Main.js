import React from 'react';
import PropTypes from 'prop-types';


function Main({ name, color, maleYn }) {
    const msg = maleYn ? '여자' : '남자';
    return (
        <div>
            <main>
                <h1 style={{ color }}>안녕하세요!{name}입니다.! ({msg})</h1>
            </main>
        </div>
    );
}

Main.propTypes = {
    name: PropTypes.string
}
Main.defaultProps = {
    name: '디폴트'
}

export default Main;