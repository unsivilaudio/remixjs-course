import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '~/data/notes';

import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';

export default function NotesPage() {
    const notes = useLoaderData();

    return (
        <main>
            <NewNote />
            <NoteList notes={notes} />
        </main>
    );
}

export async function loader() {
    const notes = await getStoredNotes();
    return notes;
    // return new Response(JSON.stringify(notes), { headers: { 'Content-Type': 'application/json'}})
    // return json(notes);
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect('/notes');
}

export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
}
