import { cadastrarUsuarioService } from "@/services/cadastroUsuario.service";
import { logarUsuarioService } from "@/services/login.service";
import { useState } from "react";

export const useCadastroUsuario = () => {
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarAluno = async () => {
    const response = await cadastrarUsuarioService(
      matricula,
      nome,
      senha,
      "Aluno"
    );
    return response!.data;
  };
  const cadastrarProfessor = async () => {
    const response = await cadastrarUsuarioService(
      matricula,
      nome,
      senha,
      "Professor"
    );
    return response!.data;
  };

  return {
    matricula,
    setMatricula,
    nome,
    setNome,
    senha,
    setSenha,
    cadastrarAluno,
    cadastrarProfessor,
  };
};
