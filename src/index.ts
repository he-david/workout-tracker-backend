import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/', async () => {
  server.log.info('Incoming request at /');
  return 'Hello World!';
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server started at ', address);
});
