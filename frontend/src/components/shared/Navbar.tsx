import { useAuthStore } from "@/store/auth.store";
import { BtnLogout } from "./BtnLogout";
import { BtnMenu } from "./BtnMenu";
import { BtnLogin } from "./BtnLogin";
import { useEffect, useState } from "react";

const cajeroLinks = [
  { name: "Cargar Comprobante", url: "/cajero" },
  { name: "Ver Comprobantes", url: "/cajero/ver-comprobantes" },
];
const vendedorLinks = [
  { name: "Inicio", url: "/" },
];

export const Navbar = () => {
  const { user, tokens } = useAuthStore();
  const isAuthenticated = !!tokens?.access;

  const [navbarLinks, setNavbarLinks] = useState<{ name: string; url: string }[]>([]);

  // Obtengo los grupos del usuario autenticado
  const userGroups = isAuthenticated && user?.groups ? user.groups : [];

  // Actualizo los links en función del grupo
  useEffect(() => {
    console.log(user)
    if (userGroups.some((group) => group.name === "comprobante.cajero")) {
      setNavbarLinks(cajeroLinks);
      console.log("navbarLinks:", navbarLinks);
    } else if (userGroups.some((group) => group.name === "comrpobante.vendedor")) {
      setNavbarLinks(vendedorLinks);
      console.log("navbarLinks:", navbarLinks);
    } else {
      setNavbarLinks([]);
    }
  }, []);

  return (
    <header className="bg-gqcomprobante-300 text-white p-2 w-full fixed top-0 z-50">
      <div className="px-3 container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/LOGO_GQ_BLANCO.png"
            className="size-14 md:size-24"
            alt="logo Grupo Quijada"
          />
        </a>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-2">
            {/* Renderiza los links según el grupo */}
            {navbarLinks.map(({ name, url }) => (
              <li key={url}>
                <a
                  href={url}
                  className="text-white font-bold uppercase hover:bg-gqcomprobante-300 hover:brightness-110 p-2 px-4 transition-all rounded-md hover:shadow-md"
                >
                  {name}
                </a>
              </li>
            ))}
            {/* Botones de Login/Logout */}
            {isAuthenticated && <BtnLogout />}
            {!isAuthenticated && <BtnLogin />}
          </ul>
        </nav>
        <div className="flex gap-2 sm:hidden">
          <BtnMenu />
          {isAuthenticated && <BtnLogout />}
          {!isAuthenticated && <BtnLogin />}
        </div>
      </div>
    </header>
  );
};
