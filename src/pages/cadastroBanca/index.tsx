"use client";
import React from "react";
import * as C from "./styles";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Input from "../components/Input";
import { useCadastroBanca } from "../hooks/useCadastroBanca";

export default function CadastroBanca() {
  const {
    matriculaAluno,
    setMatriculaAluno,
    professores,
    setProfessores,
    nomeTrabalho,
    setNomeTrabalho,
    cadastrarBanca,
  } = useCadastroBanca();
  const router = useRouter();

  const handleCadastrar = async () => {
    const response = await cadastrarBanca();

    if (response) {
      router.push("/home");
    } else {
      alert("Erro ao cadastrar banca!");
    }
  };

  return (
    <C.Container>
      <Input
        type="number"
        placeholder="Matrícula Aluno "
        value={matriculaAluno}
        onChange={(e) => setMatriculaAluno(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Professores"
        value={professores}
        onChange={(e) => setProfessores([e.target.value])}
      />
      <Input
        type="text"
        placeholder="Nome do Trabalho de Conlusão"
        value={nomeTrabalho}
        onChange={(e) => setNomeTrabalho(e.target.value)}
      />
      <Button
        Text={"Cadastrar Aluno"}
        onClick={() => {
          handleCadastrar();
        }}
      />
    </C.Container>
  );
}
