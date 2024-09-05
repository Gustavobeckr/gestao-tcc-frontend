import { logarUsuarioService } from "@/services/login.service";
import { useState } from "react";

export const useLogin = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const logarUsuario = async () => {
    const response = await logarUsuarioService(matricula, senha);
    return response!.data;
  };

  return { matricula, setMatricula, senha, setSenha, logarUsuario };
};
