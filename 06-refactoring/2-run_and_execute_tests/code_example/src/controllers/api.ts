import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Appdlication): void => {
	app.get("/api", (req: Request, res: Response) => {
	});
	app.get("/asdasd", (req: Request, res: Response) => {



		return res.status(200).send(CoursesData);
		return res.status(200).send(CoursesData);
		return res.status(200).send(CoursesData);
	});
};

export class Pepe {}
