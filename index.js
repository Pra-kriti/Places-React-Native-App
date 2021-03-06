/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

//AppRegistry.registerComponent(appName, () => RNRedux);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});
