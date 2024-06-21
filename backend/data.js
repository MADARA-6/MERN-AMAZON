import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Aryan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },

  ],
  
  products: [
    {
      // _id: '1',
      name: 'Guava',
      slug: 'guava',
      category: 'Fast fruits',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 120,
      countInstock: 10,
      brand: 'frt box',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality fruits',
    },
    {
      // _id: '2',
      name: 'Berries',
      slug: 'berries',
      category: 'Quick fruits',
      image: '/images/p2.jpeg',
      price: 250,
      countInstock: 0,
      brand: 'frt box',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality fruits',
    },
    {
      // _id: '3',
      name: 'Oranges',
      slug: 'oranges',
      category: 'Quick fruits',
      image: '/images/p3.jpeg',
      price: 25,
      countInstock: 15,
      brand: 'frt box',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality fruits',
    },
    {
      // _id: '4',
      name: 'Bananas',
      slug: 'bananas',
      category: 'Quick fruits',
      image: '/images/p4.jpg',
      price: 65,
      countInstock: 5,
      brand: 'local vendor',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality fruits',
    },
  ],
  
};
export default data;