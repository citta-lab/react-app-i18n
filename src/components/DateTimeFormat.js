import React from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';

const DateTimeFormat = () => {
    return (
        <div className="cardDiv">
            <FormattedMessage id='dateMsg' />
            <FormattedDate value={new Date()} />
            <br />
            <FormattedTime value={new Date()} />;
        </div>
    )
}

export default DateTimeFormat;