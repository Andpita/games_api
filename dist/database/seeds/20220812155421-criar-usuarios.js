"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Nelson',
          email: 'nelson@teste.com',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Bleuson',
          email: 'bleuson@teste.com',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fofolete',
          email: 'fofolete@teste.com',
          password_hash: await bcryptjs.hash('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
