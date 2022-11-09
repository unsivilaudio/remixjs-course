import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getStoredNotes } from '~/data/notes';
import styles from '~/styles/note-details.css';

export default function NoteDetailsPage() {
    const note = useLoaderData();

    if (!note) return;

    return (
        <main id='note-details'>
            <header>
                <nav>
                    <Link to='/notes'>Back To All Notes</Link>
                </nav>
                <h1>{note.title}</h1>
            </header>
            <p id='note-details-content'>{note.content}</p>
        </main>
    );
}

export async function loader({ params }) {
    const notes = await getStoredNotes();
    const selectedNote = notes.find(n => n.id === params.noteId);
    if (!selectedNote) {
        throw json(
            { message: 'Could not find note for id ' + params.noteId },
            { status: 404 }
        );
    }

    return selectedNote;
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

export function meta({ data }) {
    return {
        title: data?.title || 'Not Found',
        description: 'Manage your notes with ease.',
    };
}
