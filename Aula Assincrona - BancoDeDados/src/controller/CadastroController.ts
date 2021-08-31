import { Request, Response } from "express";
import knex from "knex";

export default {
    async create(req: Request, res: Response) {
        const { name, cpf } = req.body;
        const id = 3;
        const data = { id, name, cpf };
        return res.status(201).json({ data: data });
    },

    async list(req: Request, res: Response) {

        var result = await knex('tab_cadastro').orderBy('nome');

        return res.status(200).json({ data: result });
    },

    async update(req: Request, res: Response) {
        const { nome, cpf } = req.body;
        const dataAlteracao = '30/05/2021 16:00'
        const cadastro = { nome, cpf, dataAlteracao };
        cadastro.nome = 'JOSE DA SILVA LIMA '
        return res.status(200).json({ data: cadastro });
    },
}
