import React from 'react';

export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = Object.assign({}, props);
  }

  render() {
    return (
        <div>
          <h3>Customer stuff</h3>
          <div>
            <label>
              First name
              <input defaultValue={this.state.firstname}
                     onBlur={e => this.setState({firstname: e.target.value})}
                     className="form-control"/>
            </label>
          </div>
          <div>
            <label>
              Last name
              <input defaultValue={this.state.address}
                     onBlur={e => this.setState({address: e.target.value})}
                     className="form-control"/>
            </label>
          </div>
          <button onClick={() => this.props.onUpdate(this.state)}
                  className="btn btn-default">
            Send changes
          </button>
        </div>
    );
  }
}
