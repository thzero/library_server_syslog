import syslogServer from 'syslog-server';

const server = new syslogServer();

server.on('message', (value) => {
    console.log(value.date);     // the date/time the message was received
    console.log(value.host);     // the IP address of the host that sent the message
    console.log(value.protocol); // the version of the IP protocol ("IPv4" or "IPv6")
	console.log(value.message);  // the syslog message
	console.log(value);
});

server.start();
