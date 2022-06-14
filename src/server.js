import 'dotenv/config';
import app from './app';
import conexaoDatabase from './databases/index.js';

const port = process.env.PORT || 3001;

app.listen(process.env.PORT, () => {
  conexaoDatabase();
  if (!process.env.PORT) {
    console.log(`Rodando na porta http://localhost:${port}`);
  }
});
