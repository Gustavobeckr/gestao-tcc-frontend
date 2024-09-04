"use client";
import React, { useState } from "react";
import * as C from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import { redirect } from "next/dist/server/api-utils";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log("Navegou");
  };

  return (
    <C.Container>
      <C.Label>Gestao TCC</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>Não tem uma conta?</C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}
