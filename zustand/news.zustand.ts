import { create } from "zustand";
const domain = "http://localhost:3001";
const NewsStore = (set: any) => ({
  articles: [],
  singleArticle: {},
  getAllArticles: async () => {
    const res = await fetch(`http://localhost:3001/news`);
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
    const res = await fetch(`http://localhost:3001/news/${id}`);
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
