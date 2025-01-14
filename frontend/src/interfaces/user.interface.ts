export interface User {
    refresh: string;
    access: string;
    user: UserClass;
    redirect: string;
  }
  
  export interface UserClass {
    id: number;
    username: string;
    email: string;
    branches: any[]; // cuando tenga alguna verificar y ver el formato con el que viene
    groups: Group[];
  }
  
  export interface Group {
    id: number;
    name: string;
  }