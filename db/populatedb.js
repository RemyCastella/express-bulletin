const { Client } = require('pg');
require('dotenv').config();

const SQL = `    
    INSERT INTO messages(message, username, date)
    VALUES 
        ($1, $2, $3),
        ($4, $5, $6);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString:
      'postgresql://express_bulletin_user:1RRwhGXy3VJ6VFbzqUHi53x74X4nmydd@dpg-csaq0tggph6c73a50fi0-a.singapore-postgres.render.com/express_bulletin',

    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  await client.query(SQL, [
    'Hi there!',
    'Remy',
    new Date(),
    'Hows it going!',
    'Simon',
    new Date(),
  ]);
  await client.end();
  console.log('done');
}

main();
