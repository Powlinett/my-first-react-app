const url = "https://wagon-garage-api.herokuapp.com/techauto/cars"


const services = {
  getCars() {

  },

  postCar(carData) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carData)
    })
    .then((response) => response.json())
    .then((data) => data)
  },

  deleteCar() {

  }
}


export default services
