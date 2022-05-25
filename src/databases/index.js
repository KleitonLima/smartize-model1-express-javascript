import { connect } from 'mongoose';

export const conexaoDatabase = () => {
  connect('mongodb://localhost:27017/lojasmartize_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDb Conectado');
    })
    .catch((err) => {
      console.log(`Erro de conexão com o MongoDb: ${err}`);
    });
};
