This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-Req:
This needs translation files from react-translations repo, once npm link is executed in `react-translation` we can link it here by doing the following 
```
npm link react-transalation
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## How this works 

### Translation:
- [react-translation](https://github.com/citta-lab/react-trasnlation) repo will host all the rerquired translation. Our example purpose we have english, french and spanish.
- Each translations are created as nested object instead of `json`, which helps in readbility. 
- Each type of translations are seperated by language. 

### Consuming Translation:
- Hence [react-translation](https://github.com/citta-lab/react-trasnlation) returns javascript object and react-intl messages needs json, the consumer of the app needs to use [falt](https://www.npmjs.com/package/flat) to convert the nested object to JSON blob.
```javascript
import flatten from 'flat'
import messages from 'react-trasnlation';

const flattenedMessage = flatten(messages['en-US']);
```

### Using react-intl 
#### At Root (OneTime setup)
- Root of the App needs to be wrapped with `<IntlProvider>` which takes two props. 
-- locale : need to tell what language we are trying to tranlsate.
-- messages : respective translation text

#### Finding Locale 
1. There are three options we can chose from but in our case, last two are ideal. 
-- Letting User Choose:
--- UI will have option to choose which language they are interested in converting 
--- Based on the pick we will transalte the text 
--- User have control over the translation & can always change based on their preference
--- UI will be loaded with default language. Maybe english. 

2. Setting from Server
-- It is ideal to keep API and UI are driven by same data 
-- Acceptance-language is passed in every HTTP request. If we parse that in API during the first app load and set the cookie with the details then it is guarenteed to have same language preference in API & Client side.
-- UI will always look for cookie for setting the translation during load 

3. Browser Control 
-- Most of the mordern browser loads with user preferred language and locale data.
-- UI needs to retrieve this data during load and  use for translation. 
```javascript 
/**
 * navigator.languages: user preferred lang setting 
 * navigator.language: browser locale 
 * navigator.userLanguage: IE 11 support 
 * en-US: default
 */
var locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en-US';
```

#### At Components 
- Translate the text or number in the each element. Refer example from [react-intl](https://github.com/formatjs/react-intl/tree/master/examples) doc. 
- New component developed for the app only needs to wrap the translation elements with formatters. Detail [doc](https://github.com/formatjs/react-intl/blob/master/docs/Components.md)
- FormattedMessages vs intl.formattedMessages : If we are translating the text of tags then we can use FormattedMessages. Example 
```javascript 
//before 
<div> Learn React </div>

// now where greeting is id corresponds to translation text id from messages (i.e react-translation )
<FormattedMessage id='greeting'></FormattedMessage>
```
If we are intrested in chaging the attribute text then we can use intl.formattedMessage
```javascript 
//before
<button title={'open'}>Submit</button>

<button title={intl.formatMessage({ id: 'menu.open' })}> 
    <FormattedMessage id='submit'></FormattedMessage>
</button>
```



