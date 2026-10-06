"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  IoSearchOutline,
  IoAddOutline,
  IoCheckmarkOutline,
  IoCloseOutline,
  IoNotificationsOutline,
} from "react-icons/io5";


type Status = "Pendente" | "Confirmado" | "Cancelado";

type Agendamento = {
  id: number;
  cliente: string;
  iniciais: string;
  servico: string;
  data: string;
  horario: string;
  duracao: string;
  valor: string;
  status: Status;
};

/*
 * Por enquanto não existem agendamentos cadastrados.
 * Quando o back-end estiver pronto, esses dados virão do banco.
 */
const agendamentosIniciais: Agendamento[] = [];

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>(
    agendamentosIniciais
  );

  const [busca, setBusca] = useState("");

  const [filtro, setFiltro] = useState<
    "Todos" | Status
  >("Todos");

  /*
   * Filtra os agendamentos de acordo com:
   * - nome do cliente
   * - nome do serviço
   * - status
   */
  const agendamentosFiltrados = useMemo(() => {
    return agendamentos.filter((agendamento) => {
      const correspondeBusca =
        agendamento.cliente
          .toLowerCase()
          .includes(busca.toLowerCase()) ||
        agendamento.servico
          .toLowerCase()
          .includes(busca.toLowerCase());

      const correspondeFiltro =
        filtro === "Todos" ||
        agendamento.status === filtro;

      return correspondeBusca && correspondeFiltro;
    });
  }, [agendamentos, busca, filtro]);

  /*
   * Confirma um agendamento pendente.
   */
  function confirmarAgendamento(id: number) {
    setAgendamentos((listaAtual) =>
      listaAtual.map((agendamento) =>
        agendamento.id === id
          ? {
              ...agendamento,
              status: "Confirmado",
            }
          : agendamento
      )
    );
  }

  /*
   * Cancela um agendamento.
   */
  function cancelarAgendamento(id: number) {
    setAgendamentos((listaAtual) =>
      listaAtual.map((agendamento) =>
        agendamento.id === id
          ? {
              ...agendamento,
              status: "Cancelado",
            }
          : agendamento
      )
    );
  }

  return (
    <main className="paginaAgendamentos">

      {/* CABEÇALHO */}

      <header className="cabecalhoAgendamentos">

        <h2>
          Agendamentos
        </h2>

        <div className="usuarioHeader">

          <Link
            href="/notificacoes"
            className="botaoNotificacao"
            aria-label="Notificações"
          >
            <IoNotificationsOutline size={23} />
          </Link>

          <Link
            href="/perfil"
            className="linkPerfil"
          >
            <div className="avatar">
              WS
            </div>

            <span>
              Williane
            </span>
          </Link>

        </div>

      </header>


      {/* CONTEÚDO */}

      <div className="conteudoAgendamentos">

        <div className="tituloAgendamentos">

          <div>

            <h1>
              Agendamentos
            </h1>

            <p>
              Gerencie todos os agendamentos do studio
            </p>

          </div>

          <button
            className="botaoNovoAgendamento"
            type="button"
          >
            <IoAddOutline size={21} />
            Novo agendamento
          </button>

        </div>


        {/* BUSCA E FILTROS */}

        <section className="barraFiltros">

          <div className="campoBusca">

            <IoSearchOutline
              size={20}
            />

            <input
              type="text"
              placeholder="Buscar cliente ou serviço..."
              value={busca}
              onChange={(event) =>
                setBusca(event.target.value)
              }
            />

          </div>


          <div className="filtros">

            <button
              type="button"
              className={
                filtro === "Todos"
                  ? "filtro ativo"
                  : "filtro"
              }
              onClick={() => setFiltro("Todos")}
            >
              Todos
            </button>

            <button
              type="button"
              className={
                filtro === "Pendente"
                  ? "filtro ativo"
                  : "filtro"
              }
              onClick={() => setFiltro("Pendente")}
            >
              Pendente
            </button>

            <button
              type="button"
              className={
                filtro === "Confirmado"
                  ? "filtro ativo"
                  : "filtro"
              }
              onClick={() => setFiltro("Confirmado")}
            >
              Confirmado
            </button>

            <button
              type="button"
              className={
                filtro === "Cancelado"
                  ? "filtro ativo"
                  : "filtro"
              }
              onClick={() => setFiltro("Cancelado")}
            >
              Cancelado
            </button>

          </div>

        </section>


        {/* TABELA */}

        <section className="tabelaAgendamentos">

          <div className="cabecalhoTabela">

            <span>Cliente</span>
            <span>Serviço</span>
            <span>Data</span>
            <span>Horário</span>
            <span>Duração</span>
            <span>Valor</span>
            <span>Status</span>
            <span>Ações</span>

          </div>


          {agendamentosFiltrados.length === 0 ? (

            <div className="estadoVazio">

              <div className="iconeVazio">
                <IoSearchOutline size={25} />
              </div>

              <h3>
                Nenhum agendamento encontrado
              </h3>

              <p>
                Os agendamentos realizados pelos clientes
                aparecerão aqui.
              </p>

            </div>

          ) : (

            <div className="listaAgendamentos">

              {agendamentosFiltrados.map(
                (agendamento) => (

                  <div
                    className="linhaAgendamento"
                    key={agendamento.id}
                  >

                    <div className="clienteAgendamento">

                      <div className="avatarCliente">
                        {agendamento.iniciais}
                      </div>

                      <span>
                        {agendamento.cliente}
                      </span>

                    </div>


                    <span>
                      {agendamento.servico}
                    </span>


                    <span>
                      {agendamento.data}
                    </span>


                    <span>
                      {agendamento.horario}
                    </span>


                    <span>
                      {agendamento.duracao}
                    </span>


                    <span>
                      {agendamento.valor}
                    </span>


                    <span>

                      <span
                        className={`status ${
                          agendamento.status ===
                          "Confirmado"
                            ? "confirmado"
                            : agendamento.status ===
                              "Cancelado"
                            ? "cancelado"
                            : "pendente"
                        }`}
                      >
                        {agendamento.status}
                      </span>

                    </span>


                    <div className="acoesAgendamento">

                      {agendamento.status ===
                        "Pendente" && (

                        <button
                          type="button"
                          className="botaoConfirmar"
                          title="Confirmar agendamento"
                          onClick={() =>
                            confirmarAgendamento(
                              agendamento.id
                            )
                          }
                        >
                          <IoCheckmarkOutline
                            size={18}
                          />
                        </button>

                      )}

                      {agendamento.status !==
                        "Cancelado" && (

                        <button
                          type="button"
                          className="botaoCancelar"
                          title="Cancelar agendamento"
                          onClick={() =>
                            cancelarAgendamento(
                              agendamento.id
                            )
                          }
                        >
                          <IoCloseOutline
                            size={18}
                          />
                        </button>

                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}