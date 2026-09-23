import syslogServer from 'syslog-server';

const server = new syslogServer();

// One line per message. This was five console.log calls per message, the last
// of them inspecting the whole object, and each a synchronous write.
server.on('message', (value) => {
	const date = value.date instanceof Date ? value.date.toISOString() : value.date;
	console.log(`${date} ${value.host} ${value.protocol} ${value.message}`);
});

server.start();
