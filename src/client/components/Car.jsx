import React from 'react';

export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  render() {
    return (
        <div>
          <h3>Car stuff</h3>
          <div>
            <label>
              Brand
              <input defaultValue={this.state.brand}
                     onBlur={e => this.setState({brand: e.target.value})}
                     className="form-control"/>
            </label>
          </div>
          <div>
            <label>
              Model
              <input defaultValue={this.state.model}
                     onBlur={e => this.setState({model: e.target.value})}
                     className="form-control"/>
            </label>
          </div>
          <button onClick={() => this.props.onUpdate(this.state)}
                  className="btn btn-default">Send changes
          </button>
        </div>
    )
  }
}
