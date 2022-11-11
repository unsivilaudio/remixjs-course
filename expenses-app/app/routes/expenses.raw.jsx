import { json } from '@remix-run/node';
import { getExpenses } from '~/data/expenses.server';

export async function loader() {
    const expensesRaw = (await getExpenses()) || [];
    return json(expensesRaw);
}
