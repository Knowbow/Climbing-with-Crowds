# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
    name: "Guest",
    email: "Guest",
    password: "gggggg"
)

u2 = User.create!(
    name: "eunji",
    email: "bee",
    password: "bbbbbb"
)

e1 - Event.new(id: 1, host_id: 1, date:"hi")
