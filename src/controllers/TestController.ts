import { Request, Response } from "express";

class TestController {
    async testRoutesCall(req:Request,res:Response) {
        res.send('Api Rendered Successfully!!!!!');
    }
}

export default new TestController;