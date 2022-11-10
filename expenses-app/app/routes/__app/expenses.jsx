import { Link, Outlet } from '@remix-run/react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import ExpensesList from '~/components/expenses/ExpensesList';
import expensesStyles from '~/styles/expenses.css';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'First Expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        title: 'Second Expense',
        amount: 25.49,
        date: new Date().toISOString(),
    },
    {
        id: 'e3',
        title: 'Third Expense',
        amount: 49.99,
        date: new Date().toISOString(),
    },
];

export default function ExpensesLayout() {
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
                <ExpensesList expenses={DUMMY_EXPENSES} />
            </main>
        </>
    );
}

export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles }];
}
