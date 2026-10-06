"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSparklesOutline } from "react-icons/io5";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="pt-br">
      <body
        style={{
          margin: 0,
          backgroundColor: "#DDE8F5",
          fontFamily: "Arial",
        }}
      >
        <div style={styles.container}>

          {pathname !== "/login" && (
            <aside style={styles.sidebar}>

              <div style={styles.logoArea}>

                <div style={styles.logo}>
                  <IoSparklesOutline
                    size={25}
                    color="#185fa5"
                  />
                </div>

                <h2 style={styles.logoTexto}>
                  Williane Nails
                </h2>

              </div>

              <nav style={styles.menu}>

                <Link
                  href="/dashboard"
                  style={styles.link}
                >
                  Dashboard
                </Link>

                <Link
                  href="/agendamentos"
                  style={styles.link}
                >
                  Agendamentos
                </Link>

                <Link
                  href="/clientes"
                  style={styles.link}
                >
                  Clientes
                </Link>

                <Link
                  href="/servicos"
                  style={styles.link}
                >
                  Serviços
                </Link>

                <Link
                  href="/notificacoes"
                  style={styles.link}
                >
                  Notificações
                </Link>

                <Link
                  href="/perfil"
                  style={styles.link}
                >
                  Perfil
                </Link>

                <Link
                  href="/configuracoes"
                  style={styles.link}
                >
                  Configurações
                </Link>

              </nav>

            </aside>
          )}

          <main
            style={{
              flex: 1,
              padding: pathname === "/login" ? 0 : "30px",
            }}
          >
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#FFFFFF",
    padding: "24px 20px",
    borderRight: "1px solid #D5E0F0",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "40px",
  },

  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "14px",
    backgroundColor: "#EAF1FB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoTexto: {
    color: "#1A3A5C",
    fontSize: "20px",
    margin: 0,
  },

  menu: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },

  link: {
    textDecoration: "none",
    backgroundColor: "#F3F7FC",
    padding: "14px 16px",
    borderRadius: "14px",
    color: "#1A3A5C",
    fontWeight: "600",
  },

  main: {
    flex: 1,
  },
};