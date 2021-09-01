import { Request, Response } from "express";

import knex from "../database/connection";

export default {
    //metodo get
    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body;
        const data = { cpf, nome };
        await knex('tab_cadastro').insert(data);
        return res.status(201).json({ data: data });
    },

    //metodo list
    async list(req: Request, res: Response) {
        var result = await knex('tab_cadastro').orderBy('nome');
        return res.status(200).json({ data: result });
    },

    //metodo get
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const user = await knex('tab_cadastro').where({ id });
        return res.status(200).json(user);
    },

    //metodo put
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        const data = { cpf, nome };
        await knex('tab_cadastro').update(data).where({ id });
        const cadastro = await knex('tab_cadastro').where({ id });
        return res.status(200).json({ data: cadastro });
    },

    //metodo delete
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await knex('tab_cadastro').del().where({ id });
        return res.status(200).json({ message: 'Registro excluido com sucesso.' });
    },
}
