import React from 'react';
import Validation from 'react-validation';

class TextFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Example text',
    };
  }

  render() {
    return (
      <input
        type='text'
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.field['#webform_key']}
      />
    );
  }
}

export default TextFormComponent;
