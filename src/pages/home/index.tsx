"use client";
import React, { useState } from "react";
import * as C from "./styles";
import Button from "../components/Button";
import { useRouter } from "next/router";
import DrawerComponent from "../components/Drawer/indesx";

export default function Home() {
  const router = useRouter();

  return (
    <C.Container>
      <DrawerComponent />
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
      <Button
        Text={"Cadastrar Banca"}
        onClick={() => {
          router.push("/cadastroBanca");
        }}
      />
    </C.Container>
  );
}
