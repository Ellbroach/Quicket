const User = require('./user')
const Beer = require('./beer')
const Genre = require('./genre')
const Brewery = require('./brewery')
const Review = require('./review')
const Order = require('./order')
const LineItem = require('./lineItem')


Beer.belongsToMany(Genre, {through: 'Beer_Genre'})
Genre.belongsToMany(Beer, {through: 'Beer_Genre'})
Beer.belongsToMany(Brewery, {through: 'Beer_Brewery'})
Brewery.belongsToMany(Beer, {through: 'Beer_Brewery'})
Beer.hasMany(Review)
Order.belongsToMany(Beer, {through: LineItem}, {foreignKey: { allowNull: true }} )
Order.belongsTo(User)
LineItem.belongsTo(Order)
Order.hasMany(LineItem)
User.hasMany(Review)

module.exports = {
  User,
  Beer,
  Genre,
  Brewery,
  Review,
  Order,
  LineItem
}
