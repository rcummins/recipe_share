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
skyler = User.find_by(username: 'skyler')
lance = User.find_by(username: 'lance')
reviewer1 = User.find_by(username: 'reviewer1')
reviewer2 = User.find_by(username: 'reviewer2')
reviewer3 = User.find_by(username: 'reviewer3')

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
  title: 'Thanksgiving cranberry sauce',
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
  title: 'Banana cake with lemon icing',
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

apple_pie = Recipe.create({
  author_id: skyler.id,
  title: 'Apple pie with crumble topping',
  servings: 8
})

Ingredient.create([
  {recipe_id: apple_pie.id,
    item_number: 1,
    ingredient: '6 apples (3 Fuji, 3 Granny Smith)'},
  {recipe_id: apple_pie.id,
    item_number: 2,
    ingredient: '3/4 cups sugar for the pie filling'},
  {recipe_id: apple_pie.id,
    item_number: 3,
    ingredient: '4 tablespoons corn starch'},
  {recipe_id: apple_pie.id,
    item_number: 4,
    ingredient: '1 teaspoon cinnamon'},
  {recipe_id: apple_pie.id,
    item_number: 5,
    ingredient: '1/4 teaspoon nutmeg'},
  {recipe_id: apple_pie.id,
    item_number: 6,
    ingredient: '1/4 teaspoon salt'},
  {recipe_id: apple_pie.id,
    item_number: 7,
    ingredient: '1 tablespoon lemon juice'},
  {recipe_id: apple_pie.id,
    item_number: 8,
    ingredient: '4 tablespoons cold butter, cut into small pieces'},
  {recipe_id: apple_pie.id,
    item_number: 9,
    ingredient: 'Pillsbury refrigerated pie crust'},
  {recipe_id: apple_pie.id,
    item_number: 10,
    ingredient: '1/2 cup sugar for the crumble topping'},
  {recipe_id: apple_pie.id,
    item_number: 11,
    ingredient: '1/2 cup flour'},
  {recipe_id: apple_pie.id,
    item_number: 12,
    ingredient: '1/2 cup room-temperature butter'}
])

Instruction.create([
  {recipe_id: apple_pie.id,
    step_number: 1,
    instruction: 'Preheat the oven to 450°F. Roll out the pie crust into a pie dish.'},
  {recipe_id: apple_pie.id,
    step_number: 2,
    instruction: 'Peel and core the apples, then slice them into 1/4 inch slices.'},
  {recipe_id: apple_pie.id,
    step_number: 3,
    instruction: 'Toss the apple slices with the corn starch, cinnamon, nutmeg, salt, lemon juice and 3/4 cups sugar.'},
  {recipe_id: apple_pie.id,
    step_number: 4,
    instruction: 'Layer the apple slices in the pie crust, dotting with small pieces of cold butter.'},
  {recipe_id: apple_pie.id,
    step_number: 5,
    instruction: 'Use an electric mixer to mix the 1/2 cup sugar, flour and 1/2 cup room-temperature butter until it has a crumbly appearance.'},
  {recipe_id: apple_pie.id,
    step_number: 6,
    instruction: 'Sprinkle the crumble on top of the apples.'},
  {recipe_id: apple_pie.id,
    step_number: 7,
    instruction: 'Cook the pie at 450°F for 10 minutes, then reduce the temperature to 350°F and cook for 30-40 more minutes or until golden brown.'}
])

green_bean_casserole = Recipe.create({
  author_id: lance.id,
  title: 'Green bean casserole',
  servings: 8
})

Ingredient.create([
  {recipe_id: green_bean_casserole.id,
    item_number: 1,
    ingredient: '2 tablespoons butter'},
  {recipe_id: green_bean_casserole.id,
    item_number: 2,
    ingredient: '2 pounds green beans, trimmed and broken in half'},
  {recipe_id: green_bean_casserole.id,
    item_number: 3,
    ingredient: 'Salt to taste'},
  {recipe_id: green_bean_casserole.id,
    item_number: 4,
    ingredient: '6 slices bacon'},
  {recipe_id: green_bean_casserole.id,
    item_number: 5,
    ingredient: '2 green onions, chopped (about 1/2 cup)'},
  {recipe_id: green_bean_casserole.id,
    item_number: 6,
    ingredient: '1/2 pound mushrooms, sliced'},
  {recipe_id: green_bean_casserole.id,
    item_number: 7,
    ingredient: '1 cup creme fraiche'},
  {recipe_id: green_bean_casserole.id,
    item_number: 8,
    ingredient: '1/3 cup heavy cream'},
  {recipe_id: green_bean_casserole.id,
    item_number: 9,
    ingredient: '1 1/2 cups shredded Gruyere'},
  {recipe_id: green_bean_casserole.id,
    item_number: 10,
    ingredient: '1/2 cup bread crumbs (or smashed Ritz crackers)'}
])

Instruction.create([
  {recipe_id: green_bean_casserole.id,
    step_number: 1,
    instruction: 'Preheat oven to 375°F. Use 1 tablespoon butter to grease a 2 or 2 1/2 quart baking dish.'},
  {recipe_id: green_bean_casserole.id,
    step_number: 2,
    instruction: 'Boil beans for 5 minutes in salted water. Transfer to cold water, then drain on a towel.'},
  {recipe_id: green_bean_casserole.id,
    step_number: 3,
    instruction: 'Cook bacon and remove it from the pan, but keep 2 tablespoons bacon grease to saute the green onions and mushrooms. Salt to taste.'},
  {recipe_id: green_bean_casserole.id,
    step_number: 4,
    instruction: 'Whisk together creme fraiche and cream; stir in Gruyere. Add beans, mushrooms and onions, and crumbled bacon. Add salt and pepper to taste. Put it all in the baking dish.'},
  {recipe_id: green_bean_casserole.id,
    step_number: 5,
    instruction: 'Melt 1 tablespoon butter and toss with bread crumbs. Sprinkle on top of casserole.'},
  {recipe_id: green_bean_casserole.id,
    step_number: 6,
    instruction: 'Bake for 30 minutes, until golden-brown and bubbling.'}
])

Rating.create([
  {recipe_id: muffins.id,
    author_id: reviewer1.id,
    taste_rating: 3,
    effort_rating: 3},
  {recipe_id: muffins.id,
    author_id: reviewer2.id,
    taste_rating: 2,
    effort_rating: 2},
  {recipe_id: muffins.id,
    author_id: reviewer3.id,
    taste_rating: 3,
    effort_rating: 2},
  {recipe_id: cranberry_sauce.id,
    author_id: reviewer1.id,
    taste_rating: 4,
    effort_rating: 2},
  {recipe_id: cranberry_sauce.id,
    author_id: reviewer2.id,
    taste_rating: 5,
    effort_rating: 1},
  {recipe_id: cranberry_sauce.id,
    author_id: reviewer3.id,
    taste_rating: 4,
    effort_rating: 1},
  {recipe_id: banana_cake.id,
    author_id: reviewer1.id,
    taste_rating: 5,
    effort_rating: 4},
  {recipe_id: banana_cake.id,
    author_id: reviewer2.id,
    taste_rating: 4,
    effort_rating: 3},
  {recipe_id: banana_cake.id,
    author_id: reviewer3.id,
    taste_rating: 5,
    effort_rating: 4},
  {recipe_id: apple_pie.id,
    author_id: reviewer1.id,
    taste_rating: 5,
    effort_rating: 4},
  {recipe_id: apple_pie.id,
    author_id: reviewer2.id,
    taste_rating: 4,
    effort_rating: 4},
  {recipe_id: apple_pie.id,
    author_id: reviewer3.id,
    taste_rating: 5,
    effort_rating: 3},
  {recipe_id: green_bean_casserole.id,
    author_id: reviewer1.id,
    taste_rating: 4,
    effort_rating: 3},
  {recipe_id: green_bean_casserole.id,
    author_id: reviewer2.id,
    taste_rating: 5,
    effort_rating: 4},
  {recipe_id: green_bean_casserole.id,
    author_id: reviewer3.id,
    taste_rating: 3,
    effort_rating: 3}
])

muffins.update_average_ratings
cranberry_sauce.update_average_ratings
banana_cake.update_average_ratings
apple_pie.update_average_ratings
green_bean_casserole.update_average_ratings
