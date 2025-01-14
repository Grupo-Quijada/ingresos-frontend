import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth.store";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importar imágenes
import bmw from "../../../img/bmw.webp";
import chevrolet from "../../../img/chevrolet.webp";
import citroen from "../../../img/citroen.webp";
import ds from "../../../img/ds.webp";
import fiat from "../../../img/fiat.webp";
import peugeot from "../../../img/peugeot.webp";
import renault from "../../../img/renault.webp";
import logo_azul from "../../../public/LOGO_GQ_AZUL.png";

export const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);
  const redirect = useAuthStore((state) => state.redirect);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const images = [peugeot, ds, bmw, chevrolet, citroen, fiat, renault];

  useEffect(() => {
    console.log(user);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError(null);
      await login(username, password);
      navigate(redirect); // configurar esto bien
      console.log("Login successful");
      setLoading(false);
    } catch (err) {
      setError("Invalid credentials or login failed");
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Contenedor de imágenes de fondo */}
      <div className="absolute inset-0 grid grid-cols-7 h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
      {/* Formulario flotante */}
      <div className="relative z-10 flex items-center justify-center h-full p-3">
      <form
          className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {/* Logo */}
          <img
            src={logo_azul}
            alt="Logo Azul"
            className="mb-4 h-48 w-48 object-contain"
          />
          
          {/* Título */}
          <h1 className="text-4xl font-semibold text-avecBlueDark mb-4 text-center">
            COMPROBANTES
          </h1>

          {/* Campo Usuario */}
          <div className="mb-4 w-full">
            <label className="text-slate-900 font-semibold">Usuario</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          {/* Campo Contraseña */}
          <div className="mb-4 w-full">
            <label className="text-slate-900 font-semibold">Contraseña</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          {/* Mensaje de error */}
          {error && (
            <p className="text-red-500 bg-red-200 font-bold text-xs px-2 py-1 rounded-sm mt-2">
              {error}
            </p>
          )}

          {/* Botón de envío */}
          {loading ? (
            <Button disabled className="bg-gray-400 px-4 py-2 font-bold text-white rounded mt-2">
              <Loader2 className="animate-spin mr-2" />
              Ingresando
            </Button>
          ) : (
            <Button
              variant={"gqsecondary"}
              type="submit"
              className="bg-gqcomprobante-200 px-4 py-2 font-bold text-white rounded mt-2"
            >
              Ingresar
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};