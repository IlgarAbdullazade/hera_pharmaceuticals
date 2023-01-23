import { faker } from "@faker-js/faker";

const reviews = [];

for (let i = 0; i < 8; i++) {
  reviews.push({
    id: faker.datatype.uuid(),
    image: `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`,
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  });
}

export default reviews;
