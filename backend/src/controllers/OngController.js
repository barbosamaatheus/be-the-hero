const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.status(200).json(ongs);
  },

  async store(req, res) {
    const { name, email, city } = req.body;

    const ongs = await connection("ongs")
      .select("*")
      .where("email", "=", email);

    const id = generateUniqueId();

    if (ongs.length > 0)
      return res.status(200).json({ id: ongs[0].id, name: ongs[0].name });

    await connection("ongs").insert({
      id,
      name,
      email,
      city,
    });

    return res.status(201).json({ id, name });
  },
  async update(req, res) {
    const { whatsapp } = req.body;
    const { id } = req.params;

    await connection("ongs").where("id", "=", id).update({
      whatsapp,
    });

    return res.status(204).send();
  },
};
