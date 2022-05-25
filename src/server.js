import { app } from './app';
import { conexaoDatabase } from './databases';

const port = 3001;

app.listen(port, () => {
  conexaoDatabase();
  console.log(`Rodando na porta http://localhost:${port}`);
});
