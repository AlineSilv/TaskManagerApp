import {db} from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
 
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`date`, `nome`, `lembrete`) VALUES(?)";

  const values = [
    req.body.date,
    req.body.nome,
    req.body.lembrete,
  ];
  
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete criado com sucesso.");
  });
  
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `date` = ?, `nome` = ?, `lembrete` = ? WHERE `id` = ?";

  const values = [
    req.body.date,
    req.body.nome,
    req.body.lembrete,
  ];
  
  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete atualizado com sucesso.");
  });

};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";
  
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete deletado com sucesso.");
  });

};