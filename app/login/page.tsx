"use client";

import "./login.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  IoSparklesOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrar() {
    if (email.trim() === "" || senha.trim() === "") {
      alert("Preencha todos os campos.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="paginaLogin">
      <div className="containerLogin">

        <div className="logoArea">

          <div className="logo">
            <IoSparklesOutline
              size={34}
              color="#185fa5"
            />
          </div>

          <h1>
            Williane Nails
          </h1>

          <p>
            Painel Administrativo
          </p>

        </div>

        <div className="cardLogin">

          <h2>
            Entrar na sua conta
          </h2>

          <div className="campo">

            <label>
              E-mail
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="campo">

            <label>
              Senha
            </label>

            <div className="senhaInput">

              <input
                type={
                  mostrarSenha
                    ? "text"
                    : "password"
                }
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) =>
                  setSenha(e.target.value)
                }
              />

              <button
                type="button"
                className="botaoOlho"
                onClick={() =>
                  setMostrarSenha(!mostrarSenha)
                }
              >
                {mostrarSenha ? (
                  <IoEyeOffOutline
                    size={22}
                    color="#6b7a90"
                  />
                ) : (
                  <IoEyeOutline
                    size={22}
                    color="#6b7a90"
                  />
                )}
              </button>

            </div>

          </div>

          <button
            className="botaoEntrar"
            onClick={entrar}
          >
            Entrar
          </button>

          <button
            className="botaoEsqueci"
            type="button"
          >
            Esqueceu a senha?
          </button>

        </div>

      </div>
    </main>
  );
}