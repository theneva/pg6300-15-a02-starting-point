import React from 'react';

import Car from '../components/Car.jsx';
import Customer from '../components/Customer.jsx';

export default class CarCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };

    this.updateCar = this.updateCar.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:7832/the-resource')
        .then(res => res.json())
        .then(data => this.setState({data}));
  }

  updateCar(car) {
    console.log('updating car to', car);

    const data = Object.assign({}, this.state);
    data.car = car;
    this.setState({data});
  }

  updateCustomer(customer) {
    console.log('updating customer to', customer);

    const data = Object.assign({}, this.state);
    data.customer = customer;
    this.setState({data});
  }

  save() {
    console.log('sending PUT to server with state', this.state.data);

    fetch('http://localhost:7832/the-resource', {
      method: 'put',
      body: JSON.stringify(this.state.data)
    })
        .then(res => res.text())
        .then(message => console.log(message));
  }

  render() {
    if (!this.state.data) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <Car {...this.state.data.car}
              onUpdate={this.updateCar}/>
          <hr/>
          <Customer {...this.state.data.customer}
              onUpdate={this.updateCustomer}/>
          <hr/>
          <button onClick={() => this.save()}
                  className="btn btn-primary">Save changes
          </button>
        </div>
    );
  }
}
