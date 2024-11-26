import {getAll, getOneByID, deleteOne} from "../models/serviceModel"
import db from './../config/dbConection.js';

describe("serviceModel Testing", () => {

    let connection;

    beforeEach(async () => {
      connection = await db.getConnection();
      await connection.beginTransaction();
    });
  
    afterEach(async () => {
      await connection.rollback();
      connection.release();
    });
  

    test("getAll() should return at least one service", async () => {
      const result = await getAll();
      expect(result.length).toBeGreaterThan(0); 
    });


    test("getOneByID() should return a service", async () => {
        const id = 2;
        const result = await getOneByID(id);
        expect(result).toBeInstanceOf(Array);
        expect(result[0]).toHaveProperty("name");
    })


    test("deleteOne() should delete a service", async () => {
        const id = 1;
        await deleteOne(id);
        const result = await getOneByID(1);
        expect(result).toEqual([]); 
    })
});