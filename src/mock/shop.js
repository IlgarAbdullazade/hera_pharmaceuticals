import { faker } from "@faker-js/faker";

//const products = [];
const products = [
  {
    id: "eddeea09-2e13-4c32-a129-53265e87b84c",
    name: "Sleek Wooden Shoes",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 324,
    image: "https://loremflickr.com/640/480/food?random=403",
    reports: [
      "https://loremflickr.com/640/480/business?random=902",
      "https://loremflickr.com/640/480/business?random=753",
      "https://loremflickr.com/640/480/business?random=67",
      "https://loremflickr.com/640/480/business?random=857",
    ],
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
  },
  {
    id: "45150875-373d-48a6-9402-4dac8cc17c86",
    name: "Practical Metal Tuna",
    category: {
      id: "95195df8-a1b0-4c4e-9e3b-5a7bd1ccf45e",
      name: "Injectables",
      slug: "injectables",
      image: "https://loremflickr.com/640/480/business?random=97",
    },
    price: 87,
    image: "https://loremflickr.com/640/480/food?random=263",
    reports: [
      "https://loremflickr.com/640/480/business?random=217",
      "https://loremflickr.com/640/480/business?random=836",
      "https://loremflickr.com/640/480/business?random=20",
      "https://loremflickr.com/640/480/business?random=59",
    ],
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
  },
  {
    id: "9df21229-5e3f-47a5-8202-f9d15a88e8cc",
    name: "Unbranded Cotton Chicken",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 6,
    image: "https://loremflickr.com/640/480/food?random=706",
    reports: [
      "https://loremflickr.com/640/480/business?random=167",
      "https://loremflickr.com/640/480/business?random=570",
      "https://loremflickr.com/640/480/business?random=344",
      "https://loremflickr.com/640/480/business?random=912",
    ],
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  },
  {
    id: "206503a8-12ac-43e7-8e33-82dc6d154cf1",
    name: "Tasty Soft Shirt",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 699,
    image: "https://loremflickr.com/640/480/food?random=677",
    reports: [
      "https://loremflickr.com/640/480/business?random=347",
      "https://loremflickr.com/640/480/business?random=33",
      "https://loremflickr.com/640/480/business?random=231",
      "https://loremflickr.com/640/480/business?random=346",
    ],
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
  },
  {
    id: "09acda96-3f09-4a1a-ba62-568ca85ed71e",
    name: "Elegant Frozen Table",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 174,
    image: "https://loremflickr.com/640/480/food?random=359",
    reports: [
      "https://loremflickr.com/640/480/business?random=210",
      "https://loremflickr.com/640/480/business?random=608",
      "https://loremflickr.com/640/480/business?random=79",
      "https://loremflickr.com/640/480/business?random=683",
    ],
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "fda6a7a5-20ee-47e3-a879-1496dad78409",
    name: "Generic Concrete Ball",
    category: {
      id: "95195df8-a1b0-4c4e-9e3b-5a7bd1ccf45e",
      name: "Injectables",
      slug: "injectables",
      image: "https://loremflickr.com/640/480/business?random=97",
    },
    price: 369,
    image: "https://loremflickr.com/640/480/food?random=988",
    reports: [
      "https://loremflickr.com/640/480/business?random=989",
      "https://loremflickr.com/640/480/business?random=582",
      "https://loremflickr.com/640/480/business?random=757",
      "https://loremflickr.com/640/480/business?random=817",
    ],
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "1d6a1263-2602-4458-9a35-96f5a901a8c0",
    name: "Fantastic Cotton Shirt",
    category: {
      id: "6905fa04-118c-4e88-8c07-0fc5f9c27570",
      name: "Orals",
      slug: "orals",
      image: "https://loremflickr.com/640/480/business?random=826",
    },
    price: 743,
    image: "https://loremflickr.com/640/480/food?random=92",
    reports: [
      "https://loremflickr.com/640/480/business?random=281",
      "https://loremflickr.com/640/480/business?random=210",
      "https://loremflickr.com/640/480/business?random=246",
      "https://loremflickr.com/640/480/business?random=498",
    ],
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "380c4389-1f98-40ac-8f7d-74c6aecabda9",
    name: "Gorgeous Metal Sausages",
    category: {
      id: "e93324d8-770c-483f-952c-6215657c846f",
      name: "HGH",
      slug: "hgh",
      image: "https://loremflickr.com/640/480/business?random=602",
    },
    price: 953,
    image: "https://loremflickr.com/640/480/food?random=985",
    reports: [
      "https://loremflickr.com/640/480/business?random=251",
      "https://loremflickr.com/640/480/business?random=997",
      "https://loremflickr.com/640/480/business?random=425",
      "https://loremflickr.com/640/480/business?random=625",
    ],
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "026d046a-9a19-4028-8f70-4ab7ea586864",
    name: "Electronic Granite Table",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 575,
    image: "https://loremflickr.com/640/480/food?random=820",
    reports: [
      "https://loremflickr.com/640/480/business?random=594",
      "https://loremflickr.com/640/480/business?random=615",
      "https://loremflickr.com/640/480/business?random=781",
      "https://loremflickr.com/640/480/business?random=809",
    ],
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
    id: "143c2463-b2ea-4935-98ff-874337b925cd",
    name: "Oriental Metal Hat",
    category: {
      id: "6905fa04-118c-4e88-8c07-0fc5f9c27570",
      name: "Orals",
      slug: "orals",
      image: "https://loremflickr.com/640/480/business?random=826",
    },
    price: 983,
    image: "https://loremflickr.com/640/480/food?random=592",
    reports: [
      "https://loremflickr.com/640/480/business?random=952",
      "https://loremflickr.com/640/480/business?random=410",
      "https://loremflickr.com/640/480/business?random=5",
      "https://loremflickr.com/640/480/business?random=156",
    ],
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  },
  {
    id: "ba150010-a50f-4679-949a-b6ab308af05a",
    name: "Handmade Metal Gloves",
    category: {
      id: "e93324d8-770c-483f-952c-6215657c846f",
      name: "HGH",
      slug: "hgh",
      image: "https://loremflickr.com/640/480/business?random=602",
    },
    price: 801,
    image: "https://loremflickr.com/640/480/food?random=634",
    reports: [
      "https://loremflickr.com/640/480/business?random=488",
      "https://loremflickr.com/640/480/business?random=956",
      "https://loremflickr.com/640/480/business?random=937",
      "https://loremflickr.com/640/480/business?random=913",
    ],
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "c0de6b3b-fc56-4cfd-8d38-923a61bd6346",
    name: "Gorgeous Granite Car",
    category: {
      id: "e93324d8-770c-483f-952c-6215657c846f",
      name: "HGH",
      slug: "hgh",
      image: "https://loremflickr.com/640/480/business?random=602",
    },
    price: 502,
    image: "https://loremflickr.com/640/480/food?random=217",
    reports: [
      "https://loremflickr.com/640/480/business?random=860",
      "https://loremflickr.com/640/480/business?random=601",
      "https://loremflickr.com/640/480/business?random=607",
      "https://loremflickr.com/640/480/business?random=754",
    ],
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  },
  {
    id: "a8075c2f-0fd8-400a-8da2-0754f448596d",
    name: "Incredible Metal Chair",
    category: {
      id: "e93324d8-770c-483f-952c-6215657c846f",
      name: "HGH",
      slug: "hgh",
      image: "https://loremflickr.com/640/480/business?random=602",
    },
    price: 187,
    image: "https://loremflickr.com/640/480/food?random=304",
    reports: [
      "https://loremflickr.com/640/480/business?random=590",
      "https://loremflickr.com/640/480/business?random=441",
      "https://loremflickr.com/640/480/business?random=538",
      "https://loremflickr.com/640/480/business?random=896",
    ],
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
    id: "0e365566-3736-4433-95cc-cf655034fcb2",
    name: "Luxurious Rubber Shoes",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 870,
    image: "https://loremflickr.com/640/480/food?random=56",
    reports: [
      "https://loremflickr.com/640/480/business?random=39",
      "https://loremflickr.com/640/480/business?random=129",
      "https://loremflickr.com/640/480/business?random=586",
      "https://loremflickr.com/640/480/business?random=304",
    ],
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  },
  {
    id: "c28b6e01-9c2f-4cc0-ad63-5179d1ee021c",
    name: "Recycled Rubber Chips",
    category: {
      id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
      name: "Pharmagrade",
      slug: "pharmagrade",
      image: "https://loremflickr.com/640/480/business?random=810",
    },
    price: 946,
    image: "https://loremflickr.com/640/480/food?random=886",
    reports: [
      "https://loremflickr.com/640/480/business?random=178",
      "https://loremflickr.com/640/480/business?random=322",
      "https://loremflickr.com/640/480/business?random=687",
      "https://loremflickr.com/640/480/business?random=38",
    ],
    description: "The Football Is Good For Training And Recreational Purposes",
  },
  {
    id: "ab8efe6a-0478-4e13-8d60-e5ad7fafdde2",
    name: "Elegant Wooden Pizza",
    category: {
      id: "95195df8-a1b0-4c4e-9e3b-5a7bd1ccf45e",
      name: "Injectables",
      slug: "injectables",
      image: "https://loremflickr.com/640/480/business?random=97",
    },
    price: 218,
    image: "https://loremflickr.com/640/480/food?random=206",
    reports: [
      "https://loremflickr.com/640/480/business?random=885",
      "https://loremflickr.com/640/480/business?random=786",
      "https://loremflickr.com/640/480/business?random=14",
      "https://loremflickr.com/640/480/business?random=900",
    ],
    description: "The Football Is Good For Training And Recreational Purposes",
  },
  {
    id: "b9db0d76-5f58-4589-a2a4-c17ceadcbe8a",
    name: "Practical Concrete Car",
    category: {
      id: "6905fa04-118c-4e88-8c07-0fc5f9c27570",
      name: "Orals",
      slug: "orals",
      image: "https://loremflickr.com/640/480/business?random=826",
    },
    price: 306,
    image: "https://loremflickr.com/640/480/food?random=8",
    reports: [
      "https://loremflickr.com/640/480/business?random=631",
      "https://loremflickr.com/640/480/business?random=326",
      "https://loremflickr.com/640/480/business?random=165",
      "https://loremflickr.com/640/480/business?random=942",
    ],
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "c4968542-ecb8-4288-b54c-e61d8f386823",
    name: "Sleek Bronze Chair",
    category: {
      id: "95195df8-a1b0-4c4e-9e3b-5a7bd1ccf45e",
      name: "Injectables",
      slug: "injectables",
      image: "https://loremflickr.com/640/480/business?random=97",
    },
    price: 81,
    image: "https://loremflickr.com/640/480/food?random=720",
    reports: [
      "https://loremflickr.com/640/480/business?random=508",
      "https://loremflickr.com/640/480/business?random=115",
      "https://loremflickr.com/640/480/business?random=778",
      "https://loremflickr.com/640/480/business?random=340",
    ],
    description: "The Football Is Good For Training And Recreational Purposes",
  },
  {
    id: "400f89d8-d428-4f43-952b-f85b4482ef5c",
    name: "Recycled Concrete Sausages",
    category: {
      id: "e93324d8-770c-483f-952c-6215657c846f",
      name: "HGH",
      slug: "hgh",
      image: "https://loremflickr.com/640/480/business?random=602",
    },
    price: 261,
    image: "https://loremflickr.com/640/480/food?random=255",
    reports: [
      "https://loremflickr.com/640/480/business?random=945",
      "https://loremflickr.com/640/480/business?random=724",
      "https://loremflickr.com/640/480/business?random=668",
      "https://loremflickr.com/640/480/business?random=289",
    ],
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "4b9b6243-d47d-4b8f-9755-215b69d499ac",
    name: "Unbranded Steel Shirt",
    category: {
      id: "6905fa04-118c-4e88-8c07-0fc5f9c27570",
      name: "Orals",
      slug: "orals",
      image: "https://loremflickr.com/640/480/business?random=826",
    },
    price: 629,
    image: "https://loremflickr.com/640/480/food?random=356",
    reports: [
      "https://loremflickr.com/640/480/business?random=229",
      "https://loremflickr.com/640/480/business?random=183",
      "https://loremflickr.com/640/480/business?random=2",
      "https://loremflickr.com/640/480/business?random=835",
    ],
    description: "The Football Is Good For Training And Recreational Purposes",
  },
];

const categories = [
  {
    id: "95195df8-a1b0-4c4e-9e3b-5a7bd1ccf45e",
    name: "Injectables",
    slug: "injectables",
    image: "https://loremflickr.com/640/480/business?random=97",
  },
  {
    id: "6905fa04-118c-4e88-8c07-0fc5f9c27570",
    name: "Orals",
    slug: "orals",
    image: "https://loremflickr.com/640/480/business?random=826",
  },
  {
    id: "e93324d8-770c-483f-952c-6215657c846f",
    name: "HGH",
    slug: "hgh",
    image: "https://loremflickr.com/640/480/business?random=602",
  },
  {
    id: "07f18512-caf6-4b0c-9032-d80d7d8ebdc4",
    name: "Pharmagrade",
    slug: "pharmagrade",
    image: "https://loremflickr.com/640/480/business?random=810",
  },
];

//for (let i = 0; i < 200; i++) {
//  products.push({
//    id: faker.datatype.uuid(),
//    name: faker.commerce.productName(),
//    category: categories[Math.floor(Math.random() * categories.length)],
//    price: Math.floor(faker.commerce.price() * 100) / 100,
//    image: `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`,
//    reports: [
//      `${faker.image.business()}?random=${Math.round(Math.random() * 1000)}`,
//      `${faker.image.business()}?random=${Math.round(Math.random() * 1000)}`,
//      `${faker.image.business()}?random=${Math.round(Math.random() * 1000)}`,
//      `${faker.image.business()}?random=${Math.round(Math.random() * 1000)}`,
//    ],
//    description: faker.commerce.productDescription(),
//  });
//}

export default {
  products,
  categories,
};
