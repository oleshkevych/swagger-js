import path from 'path'
import { createGenerator } from 'ts-json-schema-generator';
import {Deal} from "./models/deal";
import swaggerJSDoc from 'swagger-jsdoc';

const repoRoot = process.cwd();

const configDeal = {
    path: path.join(repoRoot, "src", "models", "deal.ts"),
    tsconfig: path.join(repoRoot, "tsconfig.json"),
};
const schemaDeal = createGenerator(configDeal).createSchema('Deal')


const configReservation = {
    path: path.join(repoRoot, "src", "models", "reservation.ts"),
    tsconfig: path.join(repoRoot, "tsconfig.json"),
};
const schemaReservation = createGenerator(configReservation).createSchema('Reservation')


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: 'v1.0.0',
            title: 'Test Project swagger js doc',
            description: 'Implementation of Swagger Doc with TypeScript using swagger-jsdoc & ts-json-schema-generator',
            servers: [
                {
                    url: 'http://localhost:8080',
                    description: 'test server'
                },
            ],
        },
        host: 'localhost:8080',
        tags: [
            {
                name: 'Deals',
                description: 'Fetch availabilities'
            },
            {
                name: 'Book',
                description: 'Create a reservations'
            },
        ],
        components: {
            schemas: {
                ...schemaDeal.definitions,
                ...schemaReservation.definitions
            },
            // examples: examples
        },
    },
    apis: [
        './dist/routes/deals-route.js',
    ],
};

const data = swaggerJSDoc(swaggerOptions)
console.log(data)
export default data;
