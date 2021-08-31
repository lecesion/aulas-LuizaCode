import express from 'express';

import routes from './routes';

const app = express();

app.use(routes);

app.use(express.json());

app.listen(3000, () => console.log('Servidor inicializado com sucesso na porta 3000.'));

