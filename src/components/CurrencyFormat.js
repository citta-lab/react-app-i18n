import React from 'react';
import { useIntl } from 'react-intl';

const CurrencyFormat = () => {

    const { formatMessage: fm } = useIntl();

    return (
        <div className="cardDiv">
            {fm({ id: 'currencyMsg' })}
            {fm({ id: 'currency' }, { num: 99 })}
        </div>
    )
}

export default CurrencyFormat;