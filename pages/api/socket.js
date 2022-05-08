import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('user', (message) => {
        console.log(`message received at server is ${message}`);
        socket.broadcast.emit('server', message);
      });
    });
  }
  res.end();
};

export default SocketHandler;
