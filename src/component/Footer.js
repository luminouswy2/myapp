import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer>
                <h1>footer..</h1>
                <p>주소 : {props.address}</p>
            </footer>
        </div>
    );
}

export default Footer; 