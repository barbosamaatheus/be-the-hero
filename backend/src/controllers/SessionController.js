const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const incidents = await connection("incidents").select("*");

    return res.status(200).json(incidents);
  },

  async store(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "No ONG found with this ID" });
    }
    return res.status(200).json(ong);
  }
};
