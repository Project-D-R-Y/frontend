import * as express from "express"
export class AuthController {
    public prefix : string = "/account"
    public router : express.Router = express.Router()

    constructor() {

    }

    login = async (req : express.Request, res : express.Response) {
        res.render('')
    }
}