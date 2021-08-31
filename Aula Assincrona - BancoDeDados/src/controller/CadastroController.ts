import { Request, Response } from "express";

export default {
    async create(req: Request, res: Response) {
        const { name, cpf } = req.body;
        const id = 3;
        const data = { id, name, cpf };
        return res.status(201).json({ data: data });
    }
}
