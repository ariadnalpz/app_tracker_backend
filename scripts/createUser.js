const pool = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (username, password, role) => {
  const hashed = await bcrypt.hash(password, 10);
  await pool.query(
    'INSERT INTO users (username, password, role) VALUES ($1, $2, $3)',
    [username, hashed, role]
  );
  console.log(`Usuario creado: ${username} (${role})`);
  process.exit();
};

//createUser('admin', 'password123', 'admin');
//createUser('delivery', 'password123', 'delivery');
//createUser('delivery2', 'password123', 'delivery');
//createUser('delivery3', 'password123', 'delivery');