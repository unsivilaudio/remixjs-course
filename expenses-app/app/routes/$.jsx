import { redirect } from '@remix-run/node';

// SPLAT route
export function loader({ params }) {
    console.log(params);
    if (params['*'] === 'exp') {
        return redirect('/expenses');
    }

    throw new Response('Not Found', { status: 404 });
}
