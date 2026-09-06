import { useContext } from "react";
import { Auth } from "./AuthProvider";

export const useAuth = () => useContext(Auth);