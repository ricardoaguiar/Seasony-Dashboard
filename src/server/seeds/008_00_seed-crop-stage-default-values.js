exports.seed = function(knex) {
  return knex('crop_stage_default_values')
    .del()
    .then(function() {
      return knex('crop_stage_default_values').insert([
        {
          id: '1',
          fk_crop_id: '1',
          fk_crop_stage_id: '1',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '2',
          fk_crop_id: '1',
          fk_crop_stage_id: '1',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '3',
          fk_crop_id: '1',
          fk_crop_stage_id: '1',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '4',
          fk_crop_id: '1',
          fk_crop_stage_id: '1',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '5',
          fk_crop_id: '1',
          fk_crop_stage_id: '1',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '6',
          fk_crop_id: '1',
          fk_crop_stage_id: '2',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '7',
          fk_crop_id: '1',
          fk_crop_stage_id: '2',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '8',
          fk_crop_id: '1',
          fk_crop_stage_id: '2',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '9',
          fk_crop_id: '1',
          fk_crop_stage_id: '2',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '10',
          fk_crop_id: '1',
          fk_crop_stage_id: '2',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '11',
          fk_crop_id: '1',
          fk_crop_stage_id: '3',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '12',
          fk_crop_id: '1',
          fk_crop_stage_id: '3',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '13',
          fk_crop_id: '1',
          fk_crop_stage_id: '3',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '14',
          fk_crop_id: '1',
          fk_crop_stage_id: '3',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '15',
          fk_crop_id: '1',
          fk_crop_stage_id: '3',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '16',
          fk_crop_id: '1',
          fk_crop_stage_id: '4',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '17',
          fk_crop_id: '1',
          fk_crop_stage_id: '4',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '18',
          fk_crop_id: '1',
          fk_crop_stage_id: '4',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '19',
          fk_crop_id: '1',
          fk_crop_stage_id: '4',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '20',
          fk_crop_id: '1',
          fk_crop_stage_id: '4',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '21',
          fk_crop_id: '1',
          fk_crop_stage_id: '5',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '22',
          fk_crop_id: '1',
          fk_crop_stage_id: '5',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '23',
          fk_crop_id: '1',
          fk_crop_stage_id: '5',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '24',
          fk_crop_id: '1',
          fk_crop_stage_id: '5',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '25',
          fk_crop_id: '1',
          fk_crop_stage_id: '5',
          parameter: 'water_level',
          min_value: '0',
          optimum_value: '0',
          max_value: '0',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '26',
          fk_crop_id: '1',
          fk_crop_stage_id: '6',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '27',
          fk_crop_id: '1',
          fk_crop_stage_id: '6',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '28',
          fk_crop_id: '1',
          fk_crop_stage_id: '6',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '29',
          fk_crop_id: '1',
          fk_crop_stage_id: '6',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '30',
          fk_crop_id: '1',
          fk_crop_stage_id: '6',
          parameter: 'water_level',
          min_value: '0',
          optimum_value: '0',
          max_value: '0',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },

        {
          id: '31',
          fk_crop_id: '2',
          fk_crop_stage_id: '7',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '32',
          fk_crop_id: '2',
          fk_crop_stage_id: '7',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '33',
          fk_crop_id: '2',
          fk_crop_stage_id: '7',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '34',
          fk_crop_id: '2',
          fk_crop_stage_id: '7',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '35',
          fk_crop_id: '2',
          fk_crop_stage_id: '7',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '36',
          fk_crop_id: '2',
          fk_crop_stage_id: '8',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '37',
          fk_crop_id: '2',
          fk_crop_stage_id: '8',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '38',
          fk_crop_id: '2',
          fk_crop_stage_id: '8',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '39',
          fk_crop_id: '2',
          fk_crop_stage_id: '8',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '40',
          fk_crop_id: '2',
          fk_crop_stage_id: '8',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '41',
          fk_crop_id: '2',
          fk_crop_stage_id: '9',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '42',
          fk_crop_id: '2',
          fk_crop_stage_id: '9',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '43',
          fk_crop_id: '2',
          fk_crop_stage_id: '9',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '44',
          fk_crop_id: '2',
          fk_crop_stage_id: '9',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '45',
          fk_crop_id: '2',
          fk_crop_stage_id: '9',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '46',
          fk_crop_id: '2',
          fk_crop_stage_id: '10',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '47',
          fk_crop_id: '2',
          fk_crop_stage_id: '10',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '48',
          fk_crop_id: '2',
          fk_crop_stage_id: '10',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '49',
          fk_crop_id: '2',
          fk_crop_stage_id: '10',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '50',
          fk_crop_id: '2',
          fk_crop_stage_id: '10',
          parameter: 'water_level',
          min_value: '150',
          optimum_value: '500',
          max_value: '900',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '51',
          fk_crop_id: '2',
          fk_crop_stage_id: '11',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '52',
          fk_crop_id: '2',
          fk_crop_stage_id: '11',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '53',
          fk_crop_id: '2',
          fk_crop_stage_id: '11',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '54',
          fk_crop_id: '2',
          fk_crop_stage_id: '11',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '55',
          fk_crop_id: '2',
          fk_crop_stage_id: '11',
          parameter: 'water_level',
          min_value: '0',
          optimum_value: '0',
          max_value: '0',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '56',
          fk_crop_id: '2',
          fk_crop_stage_id: '12',
          parameter: 'temperature',
          min_value: '20',
          optimum_value: '22',
          max_value: '25',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '57',
          fk_crop_id: '2',
          fk_crop_stage_id: '12',
          parameter: 'humidity',
          min_value: '70',
          optimum_value: '80',
          max_value: '90',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '58',
          fk_crop_id: '2',
          fk_crop_stage_id: '12',
          parameter: 'ph',
          min_value: '4',
          optimum_value: '5',
          max_value: '6',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '59',
          fk_crop_id: '2',
          fk_crop_stage_id: '12',
          parameter: 'ec',
          min_value: '700',
          optimum_value: '900',
          max_value: '1120',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
        {
          id: '60',
          fk_crop_id: '2',
          fk_crop_stage_id: '12',
          parameter: 'water_level',
          min_value: '0',
          optimum_value: '0',
          max_value: '0',
          created_at: '2020-11-11 00:00:00',
          updated_at: '2020-11-11 00:00:00',
          deleted_at: null,
        },
      ]);
    });
};
