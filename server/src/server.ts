import Fastify from "fastify";
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRouters } from "./routers/pool";
import { authRouters } from "./routers/auth";
import { userRouters } from "./routers/user";
import { guessRouters } from "./routers/guess";
import { gameRouters } from "./routers/game";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,

  })
  await fastify.register(cors, {
    origin: true,
  })


  await fastify.register(jwt, {
    secret: 'nlwcopa',
  })
  await fastify.register(poolRouters)
  await fastify.register(authRouters)
  await fastify.register(userRouters)
  await fastify.register(guessRouters)
  await fastify.register(gameRouters)



  await fastify.listen({ port: 3333, host: '0.0.0.0' }) //// 

}

bootstrap()