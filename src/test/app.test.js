import app from "../../app";
import request from "supertest";

describe("app.js Testing", ()=>{
    test("GET /service - Should return 200 http code", async () => {
        const response = await request(app).get("/service");
        expect(response.statusCode).toBe(200);
    })

    test("GET /reserv - Should return 401(unauthorized) http code", async () => {
        const response = (await request(app).get("/reserv"));
        expect(response.statusCode).toBe(401);
    })

    test("GET /schedule - Should return 403(forbidden)(token error) http code", async () => {
        const response = await request(app).get("/schedule").set("Authorization", "test");
        expect(response.statusCode).toBe(403);
    })
});