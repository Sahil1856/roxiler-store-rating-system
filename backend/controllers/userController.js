const db = require("../config/db");
const bcrypt = require("bcryptjs");

const getUsers = (req, res) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      address,
      role
    FROM users
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const addUser = async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      password,
      role,
    } = req.body;

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const sql = `
      INSERT INTO users
      (name,email,address,password,role)
      VALUES (?,?,?,?,?)
    `;

    db.query(
      sql,
      [
        name,
        email,
        address,
        hashedPassword,
        role,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.json({
          success: true,
          message: "User Added Successfully",
        });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getUsers,
  addUser,
};