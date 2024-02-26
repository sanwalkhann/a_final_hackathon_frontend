import { create } from "zustand";
const domain = "https://a-final-hackathon-backend.vercel.app";
const NewsStore = (set: any) => ({
  articles: [],
  singleArticle: {},
  getAllArticles: async () => {
    const res = await fetch(`https://a-final-hackathon-backend.vercel.app/news`);
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    set({
      articles: data.paginated,
    });
  },
  getSingleArticle: async (id: string) => {
    const res = await fetch(`https://a-final-hackathon-backend.vercel.app/news/${id}`);
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    set({
      singleArticle: data,
    });
  },
});

const useNewsStore = create(NewsStore);
export default useNewsStore;
