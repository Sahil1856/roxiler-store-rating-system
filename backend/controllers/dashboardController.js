const db = require("../config/db");

const getDashboardStats = (req, res) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM users) AS totalUsers,
      (SELECT COUNT(*) FROM stores) AS totalStores,
      (SELECT COUNT(*) FROM ratings) AS totalRatings,
      (
        SELECT ROUND(AVG(rating),1)
        FROM ratings
      ) AS avgRating
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);
  });
};

module.exports = {
  getDashboardStats,
};