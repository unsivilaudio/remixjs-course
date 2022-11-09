import {
    Form,
    useActionData,
    useTransition as useNavigation,
} from '@remix-run/react';
import styles from '~/components/NewNote.css';

export default function NewNote() {
    const navigation = useNavigation();
    const data = useActionData();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <Form id='note-form' method='post'>
            {data?.message && <p>{data.message}</p>}
            <p>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    required='required'
                />
            </p>
            <p>
                <label htmlFor='content'>Content</label>
                <input
                    type='text'
                    id='content'
                    name='content'
                    required='required'
                />
            </p>
            <div className='form-actions'>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting' : 'Add Note'}
                </button>
            </div>
        </Form>
    );
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}
