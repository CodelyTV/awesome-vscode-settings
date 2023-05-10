import { SomeClass } from "./another/folder/inside/here/SomeClass";
import { Course, Product, User } from "./Classes";

export class CodelyberDesordenado {
	private readonly GREETING = "Hi";

	constructor(private readonly name: string) {}
	greet(): string {
		const course = new Course();
		const user = new User();
		const product = new Product();
		const someClass = new SomeClass();

		return `${course.name()} ${user.name()} ${product.name()}`;
	}
}
