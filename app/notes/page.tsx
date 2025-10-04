import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

export default async function Notes() {
  //   const response = await getNotes();
  const response = {
    notes: [
      {
        id: "1sq1w2s",
        title: "firstNote",
        content: "firsrt note content",
        categoryId: "r23rq3r",
        userId: "12e1e1e",
        createdAt: "",
        updatedAt: "",
      },
    ],
    total: 0,
  };
  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

//--------------------------------------------
// app/notes/page.tsx
// "use client";

// import { useState } from "react";
// import NoteList from "@/components/NoteList/NoteList";
// import { getNotes, Note } from "@/lib/api";

// const Notes = () => {
//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleClick = async () => {
//     const response = await getNotes();
//     if (response?.notes) {
//       setNotes(response.notes);
//     }
//   };

//   return (
//     <section>
//       <h1>Notes List</h1>
//       <button onClick={handleClick}>Get my notes</button>
//       {notes.length > 0 && <NoteList notes={notes} />}
//     </section>
//   );
// };

// export default Notes;
