const db = require("../config/db");

const submitRating = (req, res) => {
  const { user_id, store_id, rating } = req.body;

  const checkSql = `
    SELECT * FROM ratings
    WHERE user_id = ? AND store_id = ?
  `;

  db.query(
    checkSql,
    [user_id, store_id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      // Rating already exists
      if (result.length > 0) {
        const updateSql = `
          UPDATE ratings
          SET rating = ?
          WHERE user_id = ? AND store_id = ?
        `;

        db.query(
          updateSql,
          [rating, user_id, store_id],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            }

            return res.json({
              success: true,
              message: "Rating Updated Successfully",
            });
          }
        );
      }

      // New Rating
      else {
        const insertSql = `
          INSERT INTO ratings(user_id, store_id, rating)
          VALUES (?, ?, ?)
        `;

        db.query(
          insertSql,
          [user_id, store_id, rating],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            }

            return res.json({
              success: true,
              message: "Rating Submitted Successfully",
            });
          }
        );
      }
    }
  );
};

module.exports = {
  submitRating,
};