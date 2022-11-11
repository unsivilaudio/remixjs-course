import { useLoaderData } from 'public/build/_shared/chunk-NA56Z7W5';
import Chart from '~/components/expenses/Chart';
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import { getExpenses } from '~/data/expenses.server';

export default function ExpensesAnalysisPage() {
    const expenses = useLoaderData() || [];

    console.log(expenses);

    return (
        <main>
            <Chart expenses={expenses} />
            <ExpenseStatistics expenses={expenses} />
        </main>
    );
}

export async function loader() {
    return getExpenses();
}
