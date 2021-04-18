exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('batches')
    .del()
    .then(function() {
      // Inserts seed entries
      //changed from 22 to 15
      return knex('batches').insert([
        {
          id: '1',
          fk_crop_id: '1',
          fk_user_id: '1',
          customer_name: 'Italian cuccine',
          number_of_seeded_pots: '50',
          seeding_date: '2021-04-06 00:00:00',
          created_at: '2021-04-18 21:03:57',
          updated_at: '2021-04-18 21:03:57',
          deleted_at: null,
        },
        {
          id: '2',
          fk_crop_id: '2',
          fk_user_id: '1',
          customer_name: 'Mexican tacos',
          number_of_seeded_pots: '50',
          seeding_date: '2021-04-23 00:00:00',
          created_at: '2021-04-18 21:03:57',
          updated_at: '2021-04-18 21:03:57',
          deleted_at: null,
        },
        {
          id: '3',
          fk_crop_id: '1',
          fk_user_id: '1',
          customer_name: 'Turkish Kebab',
          number_of_seeded_pots: '50',
          seeding_date: '2021-04-26 00:00:00',
          created_at: '2021-04-17 21:03:57',
          updated_at: '2021-04-17 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
