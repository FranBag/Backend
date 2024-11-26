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
                email: "lucas.fernandez@yahoo.com",
                pass: "lucas123"
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
  

    test("GET /reserv - Should return at least one reservation", async () => {
        const response = await request(app).get("/reserv")
        .set("Authorization", token);
        expect(response.body.length).toBeGreaterThan(0); 
    })

    test("GET /reserv/:id - Should return a reservation", async () => {
        const id = 2;
        const response = await request(app).get(`/reserv/${id}`)
        .set("Authorization", token);
        expect(response.body[0]).toHaveProperty("id_reservation");
    })

    test("GET /create - Should create a reservation", async () => {
        const response = await request(app).post("/reserv/create")
        .set("Authorization", token)
        .send({data:{
            id_user: 3,
            id_service: 2,
            id_schedule: 20,
            date: "2021-12-05"
            }
        });
        console.log(response)
        expect(response.statusCode).toBe(201);
    })
});