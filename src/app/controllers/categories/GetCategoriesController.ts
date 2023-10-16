import HelperExample from '@context/categories/infraestructure/helpers/HelperExample';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export default class GetCategoriesController {
  static async run(_req: Request, res: Response, _next: NextFunction) {
    const result = HelperExample.resultOutput('Test result')

    res.status(httpStatus.OK).send(result);
  }
}
