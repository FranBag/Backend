import app from "../../app";
import request from "supertest";
import db from './../config/dbConection.js';

describe("reservation Testing", () => {

    let token = "";
    let connection;

    beforeAll(async () => {
        const response = await request(app)
        .post("/user/login")
        .send({
            data:{
                email: "sofia.lopez@gmail.com",
                pass: "sofia123"
            }
        });

        token = response.body.credentials;
    })

    beforeEach(async () => {
      connection = await db.getConnection();
      await connection.beginTransaction();
    });
  
    afterEach(async () => {
      await connection.rollback();
      connection.release();
    });
  

    test("GET /user - Should return at least one user", async () => {
        const response = await request(app).get("/user")
        .set("Authorization", token);
        expect(response.body.length).toBeGreaterThan(0); 
    })

    test("GET /user/:id - Should return a user", async () => {
        const id = 2;
        const response = await request(app).get(`/user/${id}`)
        .set("Authorization", token);
        expect(response.body[0]).toHaveProperty("id_user");
    })

    test("GET /update/:id - Should update a user", async () => {
        const id = 4;
        const response = await request(app).put(`/user/update/${id}`)
        .set("Authorization", token)
        .send({data:{
            name: "Pedro Gonzales",
            phone_number: "123456789"
            }
        });
        expect(response.statusCode).toBe(200);
    })
});