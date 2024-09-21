import axios from "axios";
import { axiosRequest } from "./api";

export async function cadastrarUsuarioService(
  matricula: String,
  nome: String,
  senha: String,
  tipoUsuario: String
) {
  try {
    return await axiosRequest.post("usuario/", {
      matricula,
      nome,
      senha,
      tipoUsuario,
    });
  } catch (error) {
    console.log(error);
  }
}
