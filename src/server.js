import 'dotenv/config';
import app from './app';
import conexaoDatabase from './databases';

app.listen(process.env.PORT, () => {
  conexaoDatabase();
});
