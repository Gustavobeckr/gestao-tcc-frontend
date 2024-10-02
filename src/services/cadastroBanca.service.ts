import axios from "axios";
import { axiosRequest } from "./api";

export async function cadastrarBancaService(
  matriculaAluno: String,
  professores: String[],
  nomeTrabalho: String
) {
  try {
    return await axiosRequest.post("banca/", {
      matriculaAluno,
      professores,
      trabalhoConclusao: nomeTrabalho,
    });
  } catch (error) {
    console.log(error);
  }
}
