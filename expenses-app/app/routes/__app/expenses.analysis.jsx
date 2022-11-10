import Chart from '~/components/expenses/Chart';
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';

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

export default function ExpensesAnalysisPAge() {
    return (
        <main>
            <Chart expenses={DUMMY_EXPENSES} />
            <ExpenseStatistics expenses={DUMMY_EXPENSES} />
        </main>
    );
}
