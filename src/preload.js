import { contextBridge } from "electron";
import {
  criarCliente,
  buscarClientes,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente,
} from "./db/customerController.js";

contextBridge.exposeInMainWorld("electron", {
  customer: {
    criarCliente,
    buscarClientes,
    buscarClientePorId,
    atualizarCliente,
    deletarCliente,
  },
});
