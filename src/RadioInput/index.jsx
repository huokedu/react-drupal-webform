import React from 'react';

class RadioFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.checked });
    this.props.onChange(e.target.checked, false);
  }

  render() {
    return (
      <div>
        {
          this.props.field && Object.keys(this.props.field['#options']).map((option) =>
            <label key={option}>
              <input
                type='radio'
                onChange={this.onChange}
                value={option}
                name={this.props.field['#webform_key']}
                id={this.props.field['#webform_key']}
              />
              { this.props.field['#options'][option]}
            </label>,
          )
        }
      </div>
    );
  }
}

export default RadioFormComponent;