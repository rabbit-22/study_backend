'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      name: '최지미',
      title: 'hello',
      content: '안녕하세요',
      createdAt: '2020-09-21',
      updatedAt: '2020-09-21',
    }, {
      name: '최지미',
      title: 'ㅠㅠㅠㅠ',
      content: '안녕하세요,,,,,,,,',
      createdAt: '2020-09-21',
      updatedAt: '2020-09-21',
    }, {
      name: '최지미',
      title: '제목입니다',
      content: '내용입니다',
      createdAt: '2020-09-21',
      updatedAt: '2020-09-21',
    }, {
      name: '최지미',
      title: '제목',
      content: '내용',
      createdAt: '2020-09-21',
      updatedAt: '2020-09-21',
    }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {})
  }
};
