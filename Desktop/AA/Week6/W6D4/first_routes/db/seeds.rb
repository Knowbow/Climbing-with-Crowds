# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1 = User.create!(username: 'Andy') #comes from the mdoel class 
user2 = User.create!(username: 'Peter')

art1 = Artwork.create!(title: 'sky', image_url: 'google.com', artist_id: user1.id)
art2 = Artwork.create!(title: 'evening', image_url: 'google1.com', artist_id: user2.id)

artshare1 = ArtworkShare.create!(artwork_id: art1.id, viewer_id: user1.id)
artshare2 = ArtworkShare.create!(artwork_id: art2.id, viewer_id: user2.id)

