const ws = require('ws');

const wss = new ws.Server({
    port: 5000,

}, () => {
    console.log(`Server started on 5000`)
})


wss.on('connection', function connection(ws) {
    // ws.send('Пользователь ulbi tv успешно подключился')
    ws.on('message', function (message) {
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':
                broadcastMessage(message);
                break;
            case 'connection':
                broadcastMessage(message);
                break;
        }
    })
})

// const message = {
//     event: 'message/connection',
//     id: 123,
//     date: '21.01.2021',
//     username: 'ulbi tv',
//     message: 'Ставим лайки'
// }

function broadcastMessage(message) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message));
    })
}