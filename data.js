const menuData = [
  {
    type: 'bread',
    name: 'Banana bread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Baguette',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 4.11,
  },
  {
    type: 'bread',
    name: 'Breadstick',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Brioche',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 20.01,
  },
  {
    type: 'bread',
    name: 'Challah',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Ciabatta',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Butter',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Pound',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Biscuit',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Chiffon',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Shortcrust',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Choux',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Filo',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Flaky',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Chocolate Chip',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Shortbread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Macaron',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Biscotti',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Oatmeal',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Gingerbread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Confection',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Custards',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Deep-fried',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Pastries',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Macchiato',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Cider',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Milk',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Wine',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Soft drinks',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
]

const reviewData = [
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
]

const blogData = [
  {
    image: './assets/img/blogs/agency-content-img01.jpg',
    address: 'martin smith 29 july, 2016',
    dish: 'warm hummus with spiced lamb',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, fugiat blanditiis nihil hic aut adipisci nemo inventore saepe explicabo odio, debitis dignissimos.',
  },
  {
    image: './assets/img/blogs/agency-content-img02.jpg',
    address: 'paul scrivens 26 july, 2016',
    dish: 'scratch made moscow mules',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, fugiat blanditiis nihil hic aut adipisci nemo inventore saepe explicabo odio, debitis dignissimos.',
  },
  {
    image: './assets/img/blogs/agency-content-img03.jpg',
    address: 'martin smith 24 july, 2016',
    dish: 'crumb topped apple slab pie',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, fugiat blanditiis nihil hic aut adipisci nemo inventore saepe explicabo odio, debitis dignissimos.',
  },
]

const contactData = [
  {
    icon: 'ti-location-pin',
    title: 'contact address',
    description: '301 The Greenhouse, Custard,<br/>Factory, London, E2 8DY.',
  },
  {
    icon: 'ti-mobile',
    title: 'call us today!',
    description: '(M) +44 (0) 123 456 7890<br/>(O) +44 (0) 123 456 7890',
  },
  {
    icon: 'ti-email',
    title: 'email',
    description: 'no-reply@domain.com<br/>help@domain.com',
  },
  {
    icon: 'ti-time',
    title: 'working hours',
    description: 'Mon to Sat - 9 AM to 11 PM<br/>Sunday - 10 AM to 6 PM',
  },
]

export { reviewData, blogData, contactData, menuData }
