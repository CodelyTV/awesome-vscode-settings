import { Course } from "./Course";

export interface CoursesRepository {
	search(id: string): Promise<Course | null>;
	addCourse(course: Course): Promise<void>;
	updateCourse(course: Course): Promise<void>;
	deleteCourse(id: string): Promise<void>;
}
