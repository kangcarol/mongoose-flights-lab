import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights=> {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight=> {
    res.redirect('/flights')
  })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,

}
