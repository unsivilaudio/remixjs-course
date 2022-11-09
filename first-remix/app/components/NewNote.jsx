import styles from '~/components/NewNote.css';

export default function NewNote() {
    return (
        <form id='note-form' method='post'>
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
                <button>Add Note</button>
            </div>
        </form>
    );
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}
