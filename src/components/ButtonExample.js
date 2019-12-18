import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const ButtonExample = ({ intl }) => {


    return (
        <div className="cardDiv">
            <FormattedMessage id='btnMsg' />
            <br />
            <button title={intl.formatMessage({ id: 'title' })} onClick={() => { alert('Yay, it works') }}>
                <FormattedMessage id='click' />
            </button>
        </div>
    )
}

export default injectIntl(ButtonExample);