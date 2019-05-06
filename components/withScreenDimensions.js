import React from 'react';

import { Dimensions } from 'react-native';

export default function withScreenDimensions(WrappedComponent) {
  return class extends React.Component {
    state = {
      window: Dimensions.get('window'),
    };

    componentWillMount() {
      Dimensions.addEventListener('change', this.updateDimensions);
    }

    componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateDimensions);
    }

    updateDimensions = (({ window }) => this.setState({ window }));

    render() {
      const { window } = this.state;
      return <WrappedComponent {...this.props} screen={window} />;
    }
  };
}
