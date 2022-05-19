import OktaSignIn from '@okta/okta-signin-widget';
import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    constructor() {
        super();
        console.log('called');
        var signin = new OktaSignIn({
            issuer: 'https://dev-69604316.okta.com/oauth2/default',
            clientId: '0oa53ilpo7RKrM1Yr5d7',
            redirectUri: `http://localhost:3001/callback`,
        });
        signin
            .showSignIn({
                // Assumes there is an empty element on the page with an id of 'osw-container'
                el: '#widget-container'
            })
            .then(function (res) {
                console.log(res);
                // Most flows will not require any redirection. In these cases, tokens will be returned directly.
                // res.tokens is an object
                // oktaSignIn.authClient.handleLoginRedirect(res.tokens);
            })
            .catch(function (error) {
                console.log(error);
                // This function is invoked with errors the widget cannot recover from:
                // Known errors: CONFIG_ERROR, UNSUPPORTED_BROWSER_ERROR
            });
        //   .showSignInToGetTokens().then(function(tokens) {
        //     // store/use tokens
        //   });
    }
}
