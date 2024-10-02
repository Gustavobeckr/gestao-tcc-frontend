import React, { useState } from "react";
import * as C from "./styles";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <C.Container>
      <Button
        Text={"Cadastrar Alunos"}
        onClick={() => {
          router.push("/cadastroAluno");
        }}
      />
      <Button
        Text={"Cadastrar Professores"}
        onClick={() => {
          router.push("/cadastroProfessor");
        }}
      />
      <Button Text={"Vincular Orientadores"} onClick={() => {}} />
    </C.Container>
  );
}
