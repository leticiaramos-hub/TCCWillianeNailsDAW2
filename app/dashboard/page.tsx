"use client";

import Link from "next/link";

import {
  IoSparklesOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoNotificationsOutline,
  IoTimeOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

import "./dashboard.css";

export default function Dashboard() {

  /*
   * Por enquanto, não existem dados vindos do back-end.
   * Quando o banco for conectado, esta lista será preenchida
   * com os agendamentos reais.
   */

  const agendamentos: any[] = [];

  const quantidadeAgendamentos = agendamentos.length;

  const proximoAgendamento =
    agendamentos.length > 0
      ? agendamentos[0]
      : null;

  /*
   * Por enquanto não temos clientes vindos do banco.
   * Depois o valor será substituído pela quantidade real.
   */

  const quantidadeClientes = 0;

  return (
    <main className="paginaDashboard">

      <section className="conteudoDashboard">

        <header className="cabecalho">

          <h2>
            Dashboard
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

        <div className="conteudo">

          <div className="saudacao">

            <h2>

              Bom dia, Williane!

              <IoSparklesOutline
                className="iconeEstrela"
                size={25}
              />

            </h2>

            <p>
              Aqui está um resumo do seu studio hoje.
            </p>

          </div>


          <div className="cardsResumo">

            <div className="cardResumo">

              <div>

                <p>
                  Agendamentos hoje
                </p>

                <strong>
                  {quantidadeAgendamentos}
                </strong>

              </div>

              <div className="iconeCard">

                <IoCalendarOutline
                  size={25}
                />

              </div>

            </div>


            <div className="cardResumo">

              <div>

                <p>
                  Clientes cadastrados
                </p>

                <strong>
                  {quantidadeClientes}
                </strong>

              </div>

              <div className="iconeCard">

                <IoPeopleOutline
                  size={25}
                />

              </div>

            </div>


            <div className="cardResumo">

              <div>

                <p>
                  Próximo atendimento
                </p>

                {proximoAgendamento ? (

                  <>
                    <strong>
                      {proximoAgendamento.horario}
                    </strong>

                    <span className="nomeAtendimento">
                      {proximoAgendamento.cliente}
                    </span>
                  </>

                ) : (

                  <span className="semAtendimento">
                    Nenhum agendamento
                  </span>

                )}

              </div>

              <div className="iconeCard">

                <IoTimeOutline
                  size={25}
                />

              </div>

            </div>

          </div>

          <section className="secaoAgendamentos">

            <div className="tituloSecao">

              <h3>
                Próximos Agendamentos
              </h3>

              <Link
                href="/agendamentos"
                className="botaoVerTodos"
              >
                Ver todos

                <IoChevronForwardOutline
                  size={17}
                />

              </Link>

            </div>


            {agendamentos.length === 0 ? (

              <div className="agendamentosVazios">

                Nenhum agendamento encontrado.

              </div>

            ) : (

              <div className="listaAgendamentos">

                {agendamentos.map(
                  (agendamento, index) => (

                    <div
                      className="agendamento"
                      key={index}
                    >

                      <div className="avatarCliente">
                        {agendamento.iniciais}
                      </div>

                      <div className="infoCliente">

                        <strong>
                          {agendamento.cliente}
                        </strong>

                        <span>
                          {agendamento.servico}
                        </span>

                      </div>

                      <span className="horario">
                        {agendamento.horario}
                      </span>

                      <span
                        className={`status ${
                          agendamento.status === "Confirmado"
                            ? "confirmado"
                            : agendamento.status === "Cancelado"
                            ? "cancelado"
                            : "pendente"
                        }`}
                      >
                        {agendamento.status}
                      </span>

                    </div>

                  )
                )}

              </div>

            )}

          </section>

        </div>

      </section>

    </main>
  );
}