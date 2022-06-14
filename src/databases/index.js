import mongoose from 'mongoose';

const { connect } = mongoose;

const conexaoDatabase = () => {
  connect(process.env.DATABASE_URL, {
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

export default conexaoDatabase;
