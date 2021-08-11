import * as express from "express"
import * as ehb from "express-handlebars"
import * as cors from "cors"

export class App {
    public app : express.Application
    public port : number

    constructor(port : number, controllers : any) {
        this.app = express()
        this.app.engine('handlebars', ehb())
        this.app.set('view engine', 'handlebars')
        this.app.set('views', __dirname+'/views')

        this.app.use(express.static(__dirname+'/public'))

        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        this.port = port

        controllers.forEach((controller : any) => {
            this.app.use(controller.prefix, controller.router)
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }
}