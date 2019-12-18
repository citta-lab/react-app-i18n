import React from 'react';
import { FormattedNumber, FormattedMessage } from 'react-intl';

const NumberFormat = () => {
    return (
        <div className="cardDiv">
            <FormattedMessage id='numMsg' />
            <FormattedNumber value={123456789.12345}></FormattedNumber>
        </div>
    )
}

export default NumberFormat;