// const faker = require('faker');

// const TOTAL_PAGES = 5;

// const baseProducts = [
//   { name: 'Caneca de cerâmica rústica', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' },
//   { name: 'Camiseta not today.', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', category: 't-shirts' },
//   { name: 'Caneca Black Ring', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', category: 'mugs' },
//   { name: 'Camiseta Broken Saints', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', category: 't-shirts' },
//   { name: 'Camiseta Outcast', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', category: 't-shirts' },
//   { name: 'Caneca The Grounds', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', category: 'mugs' },
//   { name: 'Camiseta evening', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', category: 't-shirts' },
//   { name: 'Caneca preto fosco', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', category: 'mugs' },
//   { name: 'Caneca Never settle', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', category: 'mugs' },
//   { name: 'Camiseta DREAMER', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', category: 't-shirts' },
//   { name: 'Caneca Decaf! P&Co', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', category: 'mugs' },
//   { name: 'Camiseta Ramones', description: faker.lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', category: 't-shirts' },
// ]

// const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
//   const products = baseProducts.map(product => ({
//     ...product, 
//     id: faker.datatype.uuid(),
//     price_in_cents: faker.datatype.number({
//       min: 2000,
//       max: 10000,
//     }),
//     sales: faker.datatype.number(40),
//     created_at: faker.date.past()
//   })).sort(() => .5 - Math.random());

//   return [...acc, ...products]
// }, [])

// module.exports = {
//   products: allProducts
// }

// pages/api/hello.js

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//       // Handle GET request
//       res.status(200).json({ message: 'Hello, World!' });
//     } else if (req.method === 'POST') {
//       // Handle POST request
//       const data = req.body;
//       res.status(201).json({ message: 'Data received', data });
//     } else {
//       // Handle other HTTP methods
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  