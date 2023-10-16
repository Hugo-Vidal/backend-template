import { Router, Request, Response, NextFunction } from 'express';
import GetCategoriesController from '@app/controllers/categories/GetCategoriesController';

export const register = (router: Router) => {
  router.get('/categories/example', (req: Request, res: Response, next: NextFunction) => {
    return GetCategoriesController.run(req, res, next);
  });
};
