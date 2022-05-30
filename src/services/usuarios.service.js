import Usuarios from "../models/usuarios.model";

class UsuariosServices {
    async listarTodos() {
        const usuarios = await Usuarios.find()

        return usuarios
    }
}

export default UsuariosServices