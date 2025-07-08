import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:3002})

wss.on('connection',function connection(ws){
    console.log("Connected,listening from WSS");
    ws.on('message',()=>{
        ws.send('Pong')
    })
    
})