import mongoose from 'mongoose';

const { connect } = mongoose;

const conexaoDatabase = () => {
  connect(
    'mongodb+srv://KleitonLima:112131@cluster0.nxwwbes.mongodb.net/lojasmartize_db?retryWrites=true&w=majority',
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
