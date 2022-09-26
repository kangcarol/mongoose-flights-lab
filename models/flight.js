import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = mongoose.Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American','Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: () => new Date(+new Date() + 365*24*60*60*1000),
  },
  tickets: [ticketSchema]
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
