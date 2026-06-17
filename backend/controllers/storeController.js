const db = require("../config/db");

const getStores = (req, res) => {
  const sql = `
    SELECT
      stores.*,
      ROUND(AVG(ratings.rating), 1) AS avg_rating
    FROM stores
    LEFT JOIN ratings
      ON stores.id = ratings.store_id
    GROUP BY stores.id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const addStore = (req, res) => {
  const { name, email, address } = req.body;

  const sql = `
    INSERT INTO stores(name, email, address)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, address],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Store Added Successfully",
      });
    }
  );
};

module.exports = {
  getStores,
  addStore,
};