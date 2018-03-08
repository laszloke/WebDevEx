// * commerce
//   * color
//   * department
//   * productName
//   * price
//   * productAdjective
//   * productMaterial
//   * product

// ### Node.js

var faker = require('faker');

for (var i = 0; i<10 ; i++){
    console.log(faker.commerce.productName()+" price: "+faker.commerce.price())    

}

//     var randomName = faker.name.findName(); // Rowan Nikolaus
//     var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//     var randomCard = faker.helpers.createCard(); // random contact card containing many properties

