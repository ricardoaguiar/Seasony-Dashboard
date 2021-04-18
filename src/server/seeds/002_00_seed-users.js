exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: '1',
          name: 'Super Admin',
          email: 'superadmin@email.com',
          created_at: '2021-04-10- 21:03:55',
          updated_at: '2021-04-10- 21:03:55',
          deleted_at: null,
          uid: 'wYfU9Glh85ZJkozLkMCw9CMvitp1',
        },
        {
          id: '2',
          name: 'Admin',
          email: 'admin@email.com',
          created_at: '2021-04-10- 21:03:55',
          updated_at: '2021-04-10- 21:03:55',
          deleted_at: null,
          uid: 'f3fNU4hxH4T6iNST7303ajhpiwg2',
        },
        {
          id: '3',
          name: 'User',
          email: 'user@email.com',
          created_at: '2021-04-10- 21:03:55',
          updated_at: '2021-04-10- 21:03:55',
          deleted_at: null,
          uid: 'VG6OX5oTnVfvUa2W0TtAhNjUtTf1',
        },
        {
          id: '4',
          name: 'Demo',
          email: 'demo@email.com',
          created_at: '2021-04-10- 21:03:55',
          updated_at: '2021-04-10- 21:03:55',
          deleted_at: null,
          uid: '2i3t3qGvMbQAhU2lCPirgIFii742',
        },
      ]);
    });
};
