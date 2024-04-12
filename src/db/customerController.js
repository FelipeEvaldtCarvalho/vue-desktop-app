import { database } from "./database";

export const criarCliente = (cliente) => {
  const {
    name,
    address_street,
    address_number,
    address_district,
    address_detail,
    address_city,
    phone_primary,
    phone_secondary,
    notes,
    equipments,
  } = cliente;
  const stmt = database.prepare(`
    INSERT INTO customers (name, address_street, address_number, address_district, address_detail, address_city, phone_primary, phone_secondary, notes, equipments)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
  stmt.run(
    name,
    address_street,
    address_number,
    address_district,
    address_detail,
    address_city,
    phone_primary,
    phone_secondary,
    notes,
    equipments
  );
};

export const buscarClientes = () => {
  const stmt = database.prepare(`SELECT * FROM customers`);
  return stmt.all();
};

export const buscarClientePorId = (id) => {
  const stmt = database.prepare(`SELECT * FROM customers WHERE id = ?`);
  return stmt.get(id);
};

export const atualizarCliente = (id, novoCliente) => {
  const {
    name,
    address_street,
    address_number,
    address_district,
    address_detail,
    address_city,
    phone_primary,
    phone_secondary,
    notes,
    equipments,
  } = novoCliente;
  const stmt = database.prepare(`
    UPDATE customers
    SET name = ?, address_street = ?, address_number = ?, address_district = ?, address_detail = ?, address_city = ?, phone_primary = ?, phone_secondary = ?, notes = ?, equipments = ?
    WHERE id = ?
`);
  stmt.run(
    name,
    address_street,
    address_number,
    address_district,
    address_detail,
    address_city,
    phone_primary,
    phone_secondary,
    notes,
    equipments,
    id
  );
};

export const deletarCliente = (id) => {
  const stmt = database.prepare(`DELETE FROM customers WHERE id = ?`);
  stmt.run(id);
};

// Exemplo de uso:

// Criar um novo cliente
// const novoCliente = {
//   nome: 'João da Silva',
//   rua: 'Rua Principal',
//   numero: 123,
//   bairro: 'Centro',
//   complemento: 'Apartamento 1',
//   cidade: 'Cidade A',
//   telefone_principal: '(00) 1234-5678',
//   telefone_secundario: '(00) 9876-5432',
//   observacoes: 'Cliente VIP',
//   equipamentos: JSON.stringify(['equipamento1', 'equipamento2'])
// };
// criarCliente(novoCliente);

// // Buscar todos os clientes
// const clientes = buscarClientes();
// console.log(clientes);

// // Buscar um cliente por ID
// const clienteEncontrado = buscarClientePorId(1);
// console.log(clienteEncontrado);

// // Atualizar um cliente por ID
// const clienteAtualizado = {
//   nome: 'Maria Oliveira',
//   rua: 'Rua Nova',
//   numero: 456,
//   bairro: 'Bairro B',
//   complemento: 'Casa',
//   cidade: 'Cidade B',
//   telefone_principal: '(00) 1111-2222',
//   telefone_secundario: '(00) 3333-4444',
//   observacoes: 'Cliente Regular',
//   equipamentos: JSON.stringify(['equipamento3'])
// };
// atualizarCliente(1, clienteAtualizado);

// // Deletar um cliente por ID
// deletarCliente(2);
