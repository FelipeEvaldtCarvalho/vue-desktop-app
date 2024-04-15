import { contextBridge } from "electron";
import {
  criarCliente,
  getAllCustomers,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente,
} from "./db/customerController.js";

contextBridge.exposeInMainWorld("electron", {
  customer: {
    criarCliente,
    getAllCustomers,
    buscarClientePorId,
    atualizarCliente,
    deletarCliente,
  },
});
