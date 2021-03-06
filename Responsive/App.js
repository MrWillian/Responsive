import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
  widthToDp, 
  heightToDp, 
  listenToOrientationChanges, 
  removeOrientationChanges, 
  getDynamicStyles 
} from './Responsive';

import Orientation from 'react-native-orientation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _orientationDidChange = (orientation) => {
    console.log('ENTROU')
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange);
    // listenToOrientationChanges(this);
  }
  
  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange);
    // removeOrientationChanges();
  }

  render() {
    const ps = portraitStyles();
    const ls = landscapeStyles();
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={getDynamicStyles(ps.view, ls.view)}>
            <Text styles={getDynamicStyles(ps.text, ls.text)}>I Am A Text</Text>
          </View>
        </SafeAreaView>
      </>
    );
  };
};

const portraitStyles = () => {
  return StyleSheet.create({
    text: {
      fontSize: widthToDp('6%'),
    },
    view: {
      backgroundColor: 'lightblue',
    },
  });
};

const landscapeStyles = () => {
  return StyleSheet.create({
    view: {
      backgroundColor: 'red',
    },
    text: {
      fontSize: widthToDp('3%'),
    }
  });
};

export default App;
