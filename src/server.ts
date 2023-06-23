import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';


const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    //todo: lock down origin
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE"]
    }
});
const port = process.env.ENVIRONMENT === "development" ? 3005 : (Number(process.env.PORT) || 3000);
async function main() {

}

main();

httpServer.listen(port, `0.0.0.0`, () => {
    console.log(`Server listening on port ${port}`);
})