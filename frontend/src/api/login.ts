import axiosInstance from "@/services/axiosInstance";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  refresh: string;
  access: string;
  user: {
    id: number;
    username: string;
    email: string;
    branches: any[];
    groups: any[];
  };
  redirect: string;
}

// para logear uso esta fn
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("/login/", data);
    return response.data;
  } catch (error) {
    console.error("Error durante el login:", error);
    throw error;
  }
};


// para refrescar el token y mantener la sesion activa uso esta fn (corroborar que funcione insane, pedir el endpoint a back)
export const refreshToken = async (refreshToken: string): Promise<string> => {
  try {
    const response = await axiosInstance.post("/token/refresh/", {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error("Error durante el refresh token:", error);
    throw error;
  }
};