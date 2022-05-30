import UsuariosServices from '../services/usuarios.service';

const usuariosServices = new UsuariosServices();

class UsuariosControllers {
  async listarTodos(req, res) {
    const usuarios = await usuariosServices.listarTodos();

    res.sen(usuarios);
  }
}

export default UsuariosControllers;
