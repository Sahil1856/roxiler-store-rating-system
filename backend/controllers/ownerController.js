const db = require("../config/db");

const getOwnerDashboard = (req, res) => {
  const ownerId = req.params.ownerId;

  const sql = `
  SELECT
    stores.name,
    ROUND(AVG(ratings.rating),1) as avg_rating,
    COUNT(ratings.id) as total_ratings
  FROM stores
  LEFT JOIN ratings
    ON stores.id = ratings.store_id
  WHERE stores.owner_id = ?
  GROUP BY stores.id
  `;

  db.query(
    sql,
    [ownerId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
};

module.exports = {
  getOwnerDashboard,
};