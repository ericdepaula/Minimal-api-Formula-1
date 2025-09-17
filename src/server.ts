import fastify from "fastify";
import cors from '@fastify/cors'

const server = fastify({ logger: true });

server.register(cors, {
    origin: '*'
})

const times = [
    { id: 1, name: 'Ferrari' },
    { id: 2, name: 'Mercedes' },
    { id: 3, name: 'Red Bull' },
]

const corredores = [
    { id: 1, name: 'Senna', time: 'Ferrari' },
    { id: 2, name: 'Hamilton', time: 'Mercedes' },
    { id: 3, name: 'Verstappen', time: 'Red Bull' },
]

server.get('/times', async (req, res) => {
    res.type('application/json').code(200);
    return { times }
});

server.get('/corredores', async (req, res) => {
    res.type('application/json').code(200);
    return { corredores }
})

interface CorredoresParams {
    id: string
}

server.get<{ Params: CorredoresParams }>('/corredores/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const corredor = corredores.find(corredor => corredor.id === id);

    if (!corredor) {
        res.type('application/json').code(404);
        return { error: 'Corredor não encontrado' }
    } else {
        res.type('application/json').code(200);
        return { corredor }
    }

})
const port = process.env.PORT || 3000;

server.listen({ port: Number(port) }, () => {
    console.log('Server iniciado');
})