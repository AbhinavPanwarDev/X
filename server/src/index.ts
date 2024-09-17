import { initServer } from "./app";
import { ExpressMiddlewareOptions } from "@apollo/server/dist/esm/express4";

async function init() {
    const app = await initServer();
    app.listen(8000, () => console.log(`Server started at PORT:8000`));

}

init()