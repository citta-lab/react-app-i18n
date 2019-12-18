import React from 'react';
import { FormattedMessage } from 'react-intl';

const Child = () => {
    return (
        <React.Fragment>
            <h1><FormattedMessage id='pageTitle' /></h1>
        </React.Fragment >
    )
}

export default Child;