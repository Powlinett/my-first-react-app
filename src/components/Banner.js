import * as React from 'react'
import logo from "../images/white_logo_red_circle.png"

class Banner extends React.Component {
  render() {
    return (
      <>
        <div className="garage-image" style={{ background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4)), url('images/garage.jpg')" }}>
          <div className="garage-logo">
            <img src={logo} alt=""/>
          </div>
        </div>
        <div className="garage-info">
          <h3 className="text-center">Le Wagon</h3>
          <div className="garage-description">
            Our garage is the best.
            Reasonable price, always on time, we are the awesome (and fictional).
          </div>
        </div>
      </>
    )
  }
}

export default Banner
