import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const Child = ({ intl }) => {


    return (
        <React.Fragment>
            <h1>Greeting Friend !!</h1>
            <button title={intl.formatMessage({ id: 'title' })} onClick={() => { alert('Yay, it works') }}>
                <FormattedMessage id='click' />
            </button>
        </React.Fragment>
    )
}

export default injectIntl(Child);