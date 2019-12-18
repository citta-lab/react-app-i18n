import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const CustomDateFormat = () => {
    return (
        <div className="cardDiv">
            <FormattedMessage id='customDateMsg' />
            <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                day="numeric"
            />
        </div>
    )
}

export default CustomDateFormat;