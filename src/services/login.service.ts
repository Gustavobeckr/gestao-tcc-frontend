import axios from "axios";
import { axiosRequest } from "./api";

export const logarUsuarioService = async (matricula: String, senha: String) => {
  try {
    return await axiosRequest.post("usuario/login", {
      matricula,
      senha,
    });
  } catch (error) {
    console.log(error);
  }
};
