import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api/serverApi";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `${slug} notes`,
    description: `Notes from "${slug}" category`,
    openGraph: {
      title: `${slug} notes`,
      description: `Notes from "${slug}" category`,
      url: `https://notehub.com/notes/filter/${slug}`,
      siteName: "NoteHub",
      images: [
        {
          url: "/og-meta.jpg",
          width: 1200, //recomended 1200×630 px
          height: 630,
          alt: `${slug} notes`,
        },
      ],
      type: "article",
    },
  };
}

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotes({ tag: category });

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByCategory;
