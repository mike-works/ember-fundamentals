import Route from '@ember/routing/route';

// const ALL_COURSES = [
//   {
//     title: 'Phoenix Fundamentals',
//     summary:
//       'Phoenix makes building robust, high-performance web applications easier and more fun than you ever thought possible.',
//     'image-info': {
//       square2x: {
//         width: 500,
//         url: 'https://files.mike.works/courses/7/course_banner_7_square2x.png',
//         height: 500
//       }
//     }
//   },
//   {
//     title: 'Ember-Data Basics',
//     summary:
//       'As the official persistence library of the ember.js framework, ember-data has become more performant, more customizable, and an even more valuable library over time.',
//     'image-info': {
//       square2x: {
//         width: 500,
//         url: 'https://files.mike.works/courses/3/course_banner_3_square2x.png',
//         height: 500
//       }
//     }
//   },
//   {
//     title: 'Ember Basics',
//     summary:
//       "Ember.js boasts unparalleled developer productivity, an unwavering focus on making web development fun and easy, and some of the best build tools in the world. We'll cover all of the important fundamentals you need to know, in order to successfully get up and running.",
//     'image-info': {
//       square2x: {
//         width: 500,
//         url: 'https://files.mike.works/courses/2/course_banner_2_square2x.png',
//         height: 500
//       }
//     }
//   }
// ];

export default Route.extend({
  // async model() {
  //   return this.store.findAll('course');
  //     // // wait for first byte
  //     // const response = await fetch('https://api.mike.works/api/v1/courses');
  //     // const responseData = await response.json(); // Wait for last byte
  //     // // Transform each item in response.data[]
  //     // return responseData.data.map(item => {
  //     //   /**
  //     //    * We want everything on item.attributes, but also item.id
  //     //    */
  //     //   return Object.assign({
  //     //     id: item.id
  //     //   }, item.attributes)
  //     // });
  // }
});
