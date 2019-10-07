# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
Ingredient.destroy_all
Instruction.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('recipes')
ApplicationRecord.connection.reset_pk_sequence!('ingredients')
ApplicationRecord.connection.reset_pk_sequence!('instructions')

renata = User.find_by(username: 'renata')
nancy = User.find_by(username: 'nancy')
clint = User.find_by(username: 'clint')

muffins = Recipe.create({
  author_id: renata.id,
  title: 'Cranberry apple bran muffins',
  servings: 16
})

Ingredient.create([
  {recipe_id: muffins.id,
    item_number: 1,
    ingredient: '3.5 cups wheat bran'},
  {recipe_id: muffins.id,
    item_number: 2,
    ingredient: '1/3 cup whole wheat flour'},
  {recipe_id: muffins.id,
    item_number: 3,
    ingredient: '2 teaspoons ground cinnamon'},
  {recipe_id: muffins.id,
    item_number: 4,
    ingredient: '1 teaspoon baking powder'},
  {recipe_id: muffins.id,
    item_number: 5,
    ingredient: '1/8 teaspoon salt'},
  {recipe_id: muffins.id,
    item_number: 6,
    ingredient: '1 cup unsweetened applesauce'},
  {recipe_id: muffins.id,
    item_number: 7,
    ingredient: '1 cup apple cider'},
  {recipe_id: muffins.id,
    item_number: 8,
    ingredient: '1 apple, peeled, cored, and diced'},
  {recipe_id: muffins.id,
    item_number: 9,
    ingredient: '64 frozen cranberries'},
  {recipe_id: muffins.id,
    item_number: 10,
    ingredient: '16 paper muffin cup liners'},
  {recipe_id: muffins.id,
    item_number: 11,
    ingredient: 'Non-stick cooking spray'}
])

Instruction.create([
  {recipe_id: muffins.id,
    step_number: 1,
    instruction: 'Preheat the oven to 350°F.'},
  {recipe_id: muffins.id,
    step_number: 2,
    instruction: 'In a large bowl, mix all the dry ingredients, then add the wet ingredients and mix well. Fold in the diced apple. The mixture will be very thick and dense.'},
  {recipe_id: muffins.id,
    step_number: 3,
    instruction: 'Line a muffin tin with 16 paper cups. Spray each cup with non-stick cooking spray.'},
  {recipe_id: muffins.id,
    step_number: 4,
    instruction: 'Spoon the mixture into the cups, pressing it in with the back of the spoon. Press 4 cranberries into the top of each muffin.'},
  {recipe_id: muffins.id,
    step_number: 5,
    instruction: 'Bake for 30 minutes. Remove the muffins from the tin and cool them before freezing.'}
])

cranberry_sauce = Recipe.create({
  author_id: nancy.id,
  title: 'Grandma\'s cranberry sauce',
  servings: 6
})

Ingredient.create([
  {recipe_id: cranberry_sauce.id,
    item_number: 1,
    ingredient: '1 cup sugar'},
  {recipe_id: cranberry_sauce.id,
    item_number: 2,
    ingredient: '1 cup water'},
  {recipe_id: cranberry_sauce.id,
    item_number: 3,
    ingredient: '12 ounces fresh cranberries'}
])

Instruction.create([
  {recipe_id: cranberry_sauce.id,
    step_number: 1,
    instruction: 'Mix sugar and water in a sauce pan.'},
  {recipe_id: cranberry_sauce.id,
    step_number: 2,
    instruction: 'Bring to a boil and stir to dissolve the sugar.'},
  {recipe_id: cranberry_sauce.id,
    step_number: 3,
    instruction: 'Boil until the syrup is slightly thicker than water.'},
  {recipe_id: cranberry_sauce.id,
    step_number: 4,
    instruction: 'Add cranberries, reduce the heat, and cook (covered) gently for 10 minutes.'},
  {recipe_id: cranberry_sauce.id,
    step_number: 5,
    instruction: 'Cool and then refrigerate until ready to serve.'}
])

banana_cake = Recipe.create({
  author_id: clint.id,
  title: 'Grandma Jean\'s banana cake',
  servings: 12
})

Ingredient.create([
  {recipe_id: banana_cake.id,
    item_number: 1,
    ingredient: '3 bananas'},
  {recipe_id: banana_cake.id,
    item_number: 2,
    ingredient: '2 cups sifted all purpose flour'},
  {recipe_id: banana_cake.id,
    item_number: 3,
    ingredient: '1/2 teaspoon baking powder'},
  {recipe_id: banana_cake.id,
    item_number: 4,
    ingredient: '3/4 teaspoon baking soda'},
  {recipe_id: banana_cake.id,
    item_number: 5,
    ingredient: '1/2 teaspoon salt'},
  {recipe_id: banana_cake.id,
    item_number: 6,
    ingredient: '1/2 cup shortening'},
  {recipe_id: banana_cake.id,
    item_number: 7,
    ingredient: '1.5 cups sugar'},
  {recipe_id: banana_cake.id,
    item_number: 8,
    ingredient: '2 eggs'},
  {recipe_id: banana_cake.id,
    item_number: 9,
    ingredient: '1 teaspoon vanilla'},
  {recipe_id: banana_cake.id,
    item_number: 10,
    ingredient: '1 teaspoon vinegar'},
  {recipe_id: banana_cake.id,
    item_number: 11,
    ingredient: '1/4 cup milk'},
  {recipe_id: banana_cake.id,
    item_number: 12,
    ingredient: '1/4 cup melted margarine'},
  {recipe_id: banana_cake.id,
    item_number: 13,
    ingredient: '3 cups powdered sugar'},
  {recipe_id: banana_cake.id,
    item_number: 14,
    ingredient: '1 egg yolk'},
  {recipe_id: banana_cake.id,
    item_number: 15,
    ingredient: '2 tablespoons lemon juice'}
])

Instruction.create([
  {recipe_id: banana_cake.id,
    step_number: 1,
    instruction: 'Mash bananas in a mixer on medium speed and measure out 1 cup.'},
  {recipe_id: banana_cake.id,
    step_number: 2,
    instruction: 'Sift together flour, baking powder, baking soda and salt.'},
  {recipe_id: banana_cake.id,
    step_number: 3,
    instruction: 'Beat shortening, sugar, eggs and vanilla in a mixer on high speed for less than 90 seconds.'},
  {recipe_id: banana_cake.id,
    step_number: 4,
    instruction: 'Warm vinegar and milk to room temperature and add to the mixer.'},
  {recipe_id: banana_cake.id,
    step_number: 5,
    instruction: 'Add dry ingredients alternating with mashed bananas to the mixer while mixing on medium speed for less than 2 minutes.'},
  {recipe_id: banana_cake.id,
    step_number: 6,
    instruction: 'Add flour to two 9-inch pans, shake out the flour and then pour the batter into the pans. Bake at 350°F for 30-40 minutes.'},
  {recipe_id: banana_cake.id,
    step_number: 7,
    instruction: 'Lemon icing: Using a clean bowl, mix the margarine, powdered sugar, egg yolk and lemon juice in a mixer on medium speed until well mixed.'}
])
