angular.module('angularRestaurant.menu').controller('ModalController', function ($uibModalInstance, itemResolve) {

  var vm = this;
  vm.item = itemResolve

  vm.lunch_data = [ {
    "name": "Mini Chicken Quesadillas",
    "image": "/assets/images/quesas.jpg",
    "description": "2 mini chicken Quesadillas served with sour cream & salsa. Enjoy with guacamole and a side of cheesy nachos!",
    "price": "$6.95"
  }, {
    "name": "Boneless Chicken Crispers",
    "image": "/assets/images/chicken-crispers.jpg",
    "description": "6 pieces with your choice of breaded, Naked, or Grilled with rosemary, onions & sauce.",
    "price": "$8.25"
  }, {
    "name": "Bacon Cheeseburger and Fries",
    "image": "/assets/images/bacon-cheeseburger.jpg",
    "description": "A delicious burger topped with carmelized onions, applewood bacon, and a side of fresh french fries!",
    "price": "$5.95"
  }
 ]

 vm.dinner_data = [ {
   "name": "8oz. and 10oz. Flat Iron Steak",
   "image": "/assets/images/steak.png",
   "description": "Your choice of either an 8oz or a 10oz USDA choice Flat Iron steak,  broiled over open flame to enhance its flavors.",
   "price": "$15.95"
 }, {
   "name": "Chicken Parmesan",
   "image": "/assets/images/parm.jpg",
   "description": "Chicken cutlets, breaded and fried, smothered with tomato sauce, covered with Mozzarella and Parmesan cheeses, and baked until the cheese melts over.",
   "price": "$12.25"
 }, {
   "name": "Tiramisu",
   "image": "/assets/images/tiramisu.jpg",
   "description": "A delicious custard dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
   "price": "$5.95"
 }
]

  vm.close = function () {
    $uibModalInstance.close();
  };

});
