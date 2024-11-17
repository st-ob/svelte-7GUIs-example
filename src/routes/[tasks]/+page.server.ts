import {tasks, type Task} from '$lib/data/tasks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data: Task = tasks.filter(({path}) => path === params.tasks)[0];
	return data;
};