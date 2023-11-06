import {Pool} from 'pg'
import dotenv from 'dotenv'

dotenv.config();
const {
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT
} = process.env

const client = new Pool({
    host:POSTGRES_HOST,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD,
    database:POSTGRES_DB,
    port:Number(POSTGRES_PORT)
});
console.log(process.env.POSTGRES_PORT)
export default client;