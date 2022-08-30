const users = [
  {
    name: 'Kathy Son',
    email: 'kathy.son@gmail.com',
  },
  {
    name: 'Liza Smith',
    email: 'Liza.Smith@gmail.com',
  },
  {
    name: 'Kylie Smith',
    email: 'Kylie.Smith@gmail.com',
  },
];

module.exports = users;

// User.hasMany(Order);
// Order.belongsTo(User);

// Order.belongsToMany(Plant, { through: OrderProducts });
// Plant.belongsToMany(Order, { through: OrderProducts });
