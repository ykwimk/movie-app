import React from 'react';
import _ from 'lodash';

class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { location, history } = this.props
    if (_.isNil(location.state)) {
      history.push('/')
    }
  }

  render() {
    const { location } = this.props
    if (_.isNil(location.state)) return null
    return (
      <div>{location.state.title}</div>
    )
  }
}

export default Detail;