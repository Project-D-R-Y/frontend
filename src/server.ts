import { App } from "./App"
import { AuthController } from "./controllers/auth.controller"

const app = new App(3000, [
    new AuthController()
])
app.listen()