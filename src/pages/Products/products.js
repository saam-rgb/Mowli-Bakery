const menu = [
  {
    id: 1,
    image: "./images/Chocolate-and-Coconut-Slice.jpg",
    title: "Chocolate and Coconut Slice",
    description:
      "Indulge in the Richness of Chocolate and Coconut in Every Bite",
    category: "cheese",
  },
  {
    id: 2,
    image: "images/Cherry Butter Crumble Slice.jpg",
    title: "Cherry Butter Crumble Slice",
    description: "Enjoy the Sweetness of Cherries Paired with Buttery Crumbles",
    category: "cheese",
  },
  {
    id: 3,
    image: "images/Chocolate and Cherry Slice.jpg",
    title: "Chocolate and Cherry Slice",
    description:
      "Satisfy Your Cravings with the Perfect Blend of Chocolate and Cherries",
    category: "cheese",
  },
  {
    image: "images/Brownie.jpg",
    title: "Brownie",
    description: "Delight in the Richness of This Classic Chocolate Treat",
    category: "cheese",
  },
  {
    image: "images/Cheesecake Slice with Chocolate Crumbles.jpg",
    title: "Cheesecake Slice with Chocolate Crumbles",
    description:
      "Experience the Creaminess of Cheesecake with a Chocolate Crumbles topping",
    category: "cheese",
  },
  {
    image: "images/Rhubarb and Strawberry Slice.jpg",
    title: "Rhubarb and Strawberry Slice",
    description:
      "Savor the Perfect Combination of Tart Rhubarb and Sweet Strawberries",
    category: "cheese",
  },
  {
    image: "images/Plum Slice with Butter Crumbles.jpg",
    title: "Plum Slice with Butter Crumbles",
    description:
      "Indulge in the Sweetness of Plums Enhanced by Buttery Crumbles",
    category: "cheese",
  },
  {
    image: "images/Nut-Caramel Slice.jpg",
    title: "Nut-Caramel Slice",
    description:
      "Enjoy the Crunchiness of Nuts Combined with the Sweetness of Caramel",
    category: "cheese",
  },
  {
    image: "images/Apple Almond Slice.jpg",
    title: "Apple-Almond Slice",
    description: "Experience the Harmony of Apples and Almonds in Every Bite",
    category: "cheese",
  },
  {
    image: "images/Lemon Slice.jpg",
    title: "Lemon Slice",
    description: "Brighten Your Day with the Tangy Flavor of Lemon",
    category: "cheese",
  },
  {
    image: "images/Marble Slice.jpg",
    title: "Marble Slice",
    description:
      "Indulge in the Swirls of Chocolate and Vanilla in This Classic Treat",
    category: "cheese",
  },
  {
    image: "images/Cherry Pound Cake.jpg",
    title: "Cherry Slice",
    description: "Delight in the Sweetness of Cherries in Every Bite",
    category: "cheese",
  },
  {
    image: "images/Viennese Apple Baked Slice.jpg",
    title: "Viennese Apple Slice",
    description:
      "Savor the Flavor of Fresh Apples in This Austrian-inspired Treat",
    category: "cheese",
  },
  {
    image: "images/Chocolate Slice.jpg",
    title: "Chocolate Slice",
    description: "Satisfy Your Chocolate Cravings with This Classic Treat",
    category: "cheese",
  },
  {
    image: "images/Butter Crumble Slice.jpg",
    title: "Butter Crumble Slice",
    description: "Indulge in the Buttery Goodness of This Classic Treat",
    category: "cheese",
  },
  {
    image: "images/Apple Slice with Butter Crumbles.jpg",
    title: "Apple Slice with Butter Crumbles",
    description:
      "Enjoy the Sweetness of Apples Topped with Irresistible Butter Crumbles",
    category: "cheese",
  },
  {
    image: "images/Poppy Seed and Butter Crumbles Slice.jpg",
    title: "Poppy Seed and Butter Crumble Slice",
    description:
      "Experience the Nutty Flavor of Poppy Seeds with Buttery Crumbles",
    category: "cheese",
  },
  {
    image: "images/Cheesecake Slice.jpg",
    title: "Cheesecake Slice",
    description:
      "Indulge in the Creaminess of Cheesecake with This Classic Treat",
    category: "cheese",
  },
  {
    image: "images/Blueberry and Lime Slice.jpg",
    title: "Blueberry and Lime Slice",
    description:
      "Enjoy the Tangy Twist of Lime Combined with Juicy Blueberries",
    category: "cheese",
  },
  {
    image: "images/Chocolate Cream Slice.jpg",
    title: "Chocolate Cream Slice",
    description:
      "Indulge in the Creamy Goodness of Chocolate with This Delicious Treat",
    category: "cheese",
  },

  {
    image: "images/Peach Cream Slice.jpg",
    title: "Peach Cream Slice",
    description: "Experience the Juiciness of Peaches in This Creamy Delight",
    category: "cheese",
  },

  {
    image: "images/Strawberry Cake.jpg",
    title: "Strawberry Cake",
    description:
      "Experience the Freshness of Juicy Strawberries in Every Slice",
    category: "cream",
  },

  {
    image: "images/Premium Frankfurt Ring Cake.jpg",
    title: "Premium Frankfurt Ring Cake",
    description:
      "Experience the Classic Taste of Frankfurt in This Premium Ring Cake",
    category: "cream",
  },
  {
    image: "images/Strawberry Cream Gateau.jpg",
    title: "Strawberry Cream Gateau",
    description:
      "Indulge in the Creamy Goodness of Strawberries in This Gateau",
    category: "cream",
  },

  {
    image: "images/Cream Cheese Gateau.jpg",
    title: "Cream Cheese Gateau",
    description:
      "Indulge in the Creamy Smoothness of Cream Cheese in This Gateau",
    category: "cream",
  },

  {
    image: "images/Cheesecake New York Style.jpg",
    title: "Cheesecake Slice & Chocolate",
    description: "Elevate Your Senses with Premium Bakery Creations",
    category: "chocolate",
  },
  {
    image: "images/Sacher Tart.jpg",
    title: "Sacher Tart, 12 p",
    description: "Elevate Your Senses with Premium Bakery Creations",
    category: "chocolate",
  },

  {
    image: "images/Sacher Tart.jpg",
    title: "Sacher Tart",
    description: "Indulge in the Richness of Traditional Sacher Tart",
    category: "Baked",
  },
  {
    image: "images/Carrot-Nut Cake.jpg",
    title: "Carrot-Nut Cake",
    description:
      "A Delicious Blend of Carrots and Nuts, Perfect for Any Occasion",
    category: "Baked",
  },
  {
    image: "images/Strawberry Tarte.jpg",
    title: "Strawberry Tarte",
    description: "Enjoy the Freshness of Strawberries in Our Delightful Tarte",
    category: "Baked",
  },
  {
    image: "images/Cheesecake with Tangerines.jpg",
    title: "Cheesecake with Tangerines",
    description: "A Tangy Twist to Classic Cheesecake with Fresh Tangerines",
    category: "Baked",
  },
  {
    image: "images/Apple Cake with Butter Crumbles.jpg",
    title: "NEW Apple Cake with Butter Crumbles",
    description:
      "Savor the Warmth of Fresh Apples Topped with Buttery Crumbles",
    category: "Baked",
  },
  {
    image: "images/Gourmet Apple Tart.jpg",
    title: "Gourmet Apple Tarte",
    description:
      "A Sophisticated Take on Apple Desserts, Perfect for Discerning Palates",
    category: "Baked",
  },
  {
    image: "images/Blueberry Cheesecake.jpg",
    title: "Blueberry Cheesecake",
    description:
      "Delight in the Burst of Flavor from Juicy Blueberries atop Creamy Cheesecake",
    category: "Baked",
  },
  {
    image: "images/Cheesecake New York Style.jpg",
    title: "Cheesecake New York Style",
    description:
      "Experience the Classic Creaminess of New York-Style Cheesecake",
    category: "Baked",
  },
  {
    image: "images/Cheesecake.jpg",
    title: "Cheesecake",
    description: "A Timeless Dessert Classic, Perfect for Any Occasion",
    category: "Baked",
  },
  {
    image: "images/Plum Cake with Butter Crumbles.jpg",
    title: "Plum Cake with Butter Crumbles",
    description:
      "Indulge in the Sweetness of Plums Complemented by Buttery Crumbles",
    category: "Baked",
  },
  {
    image: "images/Pear Yoghurt Cake.jpg",
    title: "Pear-Yoghurt Cake",
    description:
      "Experience the Harmony of Pears and Yogurt in This Scrumptious Cake",
    category: "Baked",
  },
  {
    image: "images/Chocolate Cake.jpg",
    title: "Chocolate Cake",
    description:
      "Satisfy Your Chocolate Cravings with Our Decadent Chocolate Cake",
    category: "Baked",
  },
  {
    image: "images/Poppy Seed and Tangerine Cheesecake.jpg",
    title: "Poppy Seed and Tangerine Cheesecake",
    description:
      "Discover the Unique Combination of Poppy Seeds and Tangy Tangerines in Cheesecake",
    category: "Baked",
  },
  {
    image: "images/Cherry Cake with Butter Crumbles.jpg",
    title: "Cherry Cake with Butter Crumbles",
    description:
      "Treat Yourself to the Sweetness of Cherries with Irresistible Butter Crumbles",
    category: "Baked",
  },
  {
    image: "images/Hazelnut Ring Cake.jpg",
    title: "Hazelnut Ring Cake",
    description:
      "Enjoy the Nutty Aroma and Flavor of Hazelnuts in Our Ring Cake Creation",
    category: "Baked",
  },
  {
    image: "images/Banana Ring Cake.jpg",
    title: "Banana Ring Cake",
    description:
      "Delight in the Sweetness and Moisture of Bananas in Our Ring Cake",
    category: "Baked",
  },
  {
    image: "images/Marble Ring Cake.jpg",
    title: "Marble Ring Cake",
    description:
      "Experience the Swirls of Chocolate and Vanilla in Our Marble Ring Cake",
    category: "Baked",
  },
  {
    image: "images/Lemon Ring Cake.jpg",
    title: "Lemon Ring Cake",
    description:
      "Brighten Your Day with the Zesty Flavor of Lemon in Our Ring Cake",
    category: "Baked",
  },
  {
    image: "images/Apple Cake.jpg",
    title: "Apple Cake",
    description:
      "Classic Apple Cake That's Perfect for Any Occasion or Celebration",
    category: "Baked",
  },
  {
    image: "images/Raspberry and Hazelnut Cake.jpg",
    title: "Raspberry and Hazelnut Cake",
    description:
      "Indulge in the Perfect Marriage of Raspberry Sweetness and Nutty Hazelnut Flavor",
    category: "Baked",
  },
  {
    image: "images/Peach-Passion Fruit Cheesecake.jpg",
    title: "Peach-Passion Fruit Cheesecake",
    description:
      "Experience the Exotic Blend of Peach and Passion Fruit in Our Cheesecake Creation",
    category: "Baked",
  },
  {
    image: "images/Chocolate-Pear Cake.jpg",
    title: "Chocolate-Pear Cake",
    description:
      "Indulge in the Luxurious Combination of Chocolate and Pear Flavors in This Cake",
    category: "Baked",
  },
  {
    image: "images/Poppy Seed Cake with Butter Crumbles.jpg",
    title: "NEW Poppy Seed Cake with Butter Crumbles",
    description:
      "Enjoy the Nutty Flavor of Poppy Seeds with Irresistible Butter Crumbles",
    category: "Baked",
  },
];

export default menu;
