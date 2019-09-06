import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { IntlProvider } from 'react-intl';
import flatten from 'flat'

import messages from 'react-trasnlation';


var locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en-US';
//locale = 'fr-FR'; // Forcing for testing
const flattenedMessage = flatten(messages[locale]);

ReactDOM.render(
    <IntlProvider locale={locale} messages={flattenedMessage}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
