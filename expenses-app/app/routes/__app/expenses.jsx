import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import ExpensesList from '~/components/expenses/ExpensesList';
import { getExpenses } from '~/data/expenses.server';
import expensesStyles from '~/styles/expenses.css';

export default function ExpensesLayout() {
    const expenses = useLoaderData() || [];
    return (
        <>
            <Outlet />
            <main>
                <section id='expenses-actions'>
                    <Link to='add'>
                        <FaPlus />
                        <span>Add Expense</span>
                    </Link>
                    <a href='/expenses/raw'>
                        <FaDownload />
                        <span>Load Expenses</span>
                    </a>
                </section>
                <ExpensesList expenses={expenses} />
            </main>
        </>
    );
}

export async function loader() {
    return getExpenses();
}

export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles }];
}
