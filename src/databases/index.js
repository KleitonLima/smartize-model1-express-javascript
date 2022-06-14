import { connect } from 'mongoose';

const conexaoDatabase = () => {
  // mongodb://localhost:27017/lojasmartize_db
  connect(
    process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => {
      console.log('MongoDb Conectado');
    })
    .catch((err) => {
      console.log(`Erro de conexão com o MongoDb: ${err}`);
    });
};

export default conexaoDatabase;
