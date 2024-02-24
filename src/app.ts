import express from "express";
import {routes} from "./routes";
import swaggerUi from "swagger-ui-express";
import swagger from "../dist/swagger";

export const app = express();

app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(8080, () => {
    console.log('Server started at port 8080');
});
