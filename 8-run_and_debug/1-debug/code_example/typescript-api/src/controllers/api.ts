import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api", (req: Request, res: Response) => {
		// const data = CoursesData;

		return res.status(200).send(CoursesData);
	});
};
