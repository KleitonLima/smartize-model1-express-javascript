import { Schema, model } from 'mongoose';

const UsuariosSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    adm: { type: Boolean },
  },
  { versionKey: false },
);

const Usuarios = model('usuarios', UsuariosSchema);

export default Usuarios;
