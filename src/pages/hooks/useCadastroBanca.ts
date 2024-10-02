import { cadastrarBancaService } from "@/services/cadastroBanca.service";
import { useState } from "react";

export const useCadastroBanca = () => {
  const [matriculaAluno, setMatriculaAluno] = useState("");
  const [professores, setProfessores] = useState([""]);
  const [nomeTrabalho, setNomeTrabalho] = useState("");

  const cadastrarBanca = async () => {
    const response = await cadastrarBancaService(
      matriculaAluno,
      professores,
      nomeTrabalho
    );
    return response!.data;
  };

  return {
    matriculaAluno,
    setMatriculaAluno,
    professores,
    setProfessores,
    nomeTrabalho,
    setNomeTrabalho,
    cadastrarBanca,
  };
};
