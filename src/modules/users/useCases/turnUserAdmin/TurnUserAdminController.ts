import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = {};

    try {
      Object.assign(user, this.turnUserAdminUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(404).json({ error });
    }

    return response.status(201).json(user);
  }
}

export { TurnUserAdminController };
