import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from 'react-intl';
import { locale, manageTranslation, interactive } from 'react-trasnlation'


const msg = manageTranslation(locale, interactive);

ReactDOM.render(
    <IntlProvider locale={locale} messages={msg}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
