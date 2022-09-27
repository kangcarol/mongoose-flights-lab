import mongoose from "mongoose"

const Schema = mongoose.Schema

const mealSchema = mongoose.Schema({
  name: String,
}, {
  timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
