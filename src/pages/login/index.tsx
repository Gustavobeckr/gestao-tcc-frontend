"use client";
import React, { useState } from "react";
import * as C from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import { redirect } from "next/dist/server/api-utils";
import { Router, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/navigation";

export default function Login() {
  const { matricula, senha, setMatricula, setSenha, logarUsuario } = useLogin();
  const router = useRouter();
  const handleLogin = async () => {
    const response = await logarUsuario();

    if (response) {
      router.push("/home");
    }
  };

  return (
    <C.Container>
      <C.Label>Gestao TCC</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite sua matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button Text={"Logar"} onClick={handleLogin} />
        <C.LabelSignup>Não tem uma conta?</C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}
