"use client";
import React, { useState } from "react";
import * as C from "./styles";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Input from "../components/Input";
import { useCadastroUsuario } from "../hooks/useCadastroUsuario";

export default function CadastroProfessor() {
  const {
    matricula,
    senha,
    setMatricula,
    setSenha,
    cadastrarProfessor,
    nome,
    setNome,
  } = useCadastroUsuario();
  const router = useRouter();

  const handleCadastrar = async () => {
    const response = await cadastrarProfessor();

    if (response) {
      router.push("/home");
    } else {
      alert("Erro ao cadastrar professor!");
    }
  };
  return (
    <C.Container>
      <Input
        type="text"
        placeholder="Matrícula"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Nome Professor"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Senha Professor"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button
        Text={"Cadastrar Professor"}
        onClick={() => {
          handleCadastrar();
        }}
      />
    </C.Container>
  );
}
