"use client";
import React, { useState } from "react";
import * as C from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import { redirect } from "next/dist/server/api-utils";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Home() {
  const { matricula, senha, setMatricula, setSenha, logarUsuario } = useLogin();

  const handleLogin = async () => {
    const response = await logarUsuario();

    if (response) {
    }
  };

  return (
    <C.Container>
      <C.Label>HOME</C.Label>
    </C.Container>
  );
}
