import * as React from 'react'
import CarServices from '../services/cars'

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target;

    this.setState({ [input.name]: input.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    CarServices
      .postCar(this.state)
      .then((data) => console.log(data))
  }

  render() {
    return (
      <div className="text-center">
        <form
          className="car-form"
          onSubmit={this.handleSubmit}>
          <input
            name="brand"
            type="text"
            className="form-control"
            placeholder="Ferrari"
            onChange={this.handleChange} />
          <input
            name="model"
            type="text"
            className="form-control"
            placeholder="308 GTS"
            onChange={this.handleChange} />
          <input
            name="plate"
            type="text"
            className="form-control"
            placeholder="56E-478"
            onChange={this.handleChange} />
          <input
            name="owner"
            type="text"
            className="form-control"
            placeholder="Thomas Magnum"
            onChange={this.handleChange} />
          <input
            type="submit"
            className="btn btn-cta"
            value={ this.state.submitted ? "Car added" : "Add a car"} />
        </form>
      </div>
    )
  }
}

export default CarForm
