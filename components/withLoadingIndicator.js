import React from 'react';

import { StyleSheet, ActivityIndicator, InteractionManager, View } from 'react-native';

export default withLoadingIndicator = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      loaded: false,
    };

    componentWillMount() {
      this.setState({ loaded: false });
    }

    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.setState({ loaded: true });
      });
    }

    render() {
      const { loaded } = this.state;

      if (loaded) {
        return <WrappedComponent {...this.props} />;
      }
      return (
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    }
  };
};