const supertest = require("supertest");
const app = require("../../src/app");
const request = supertest(app);

const connection = require("../../src/database/connection");

const data = {
  name: "Teste",
  email: "email@mail.com",
  whatsapp: "83988121204",
  city: "Recife",
  uf: "PE"
};

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request.post("/ongs").send(data);
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
