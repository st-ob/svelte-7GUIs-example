import {routes, type Route} from '$lib/data/routes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data: Route = routes.filter(({path}) => path === params.tasks)[0];
	return data;
};