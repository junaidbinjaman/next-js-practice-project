export type Post = {
  id: string;
  thumbnail: string;
  date: string;
  category: string;
  slug: string;
  title: string;
  description: string;
  authorName: string;
  authorTitle: string;
  avatar: string;
};

const API_BASE = "https://68cb56fa716562cf507326e5.mockapi.io/post";

async function fetcher<T>(url: string, page?: string, limit?: string): Promise<T> {
  const urlObj = new URL(url);
  if (page && limit) {
    urlObj.searchParams.append("page", page);
    urlObj.searchParams.append("limit", limit);
  }

  const res = await fetch(urlObj.toString());
  if (!res.ok) throw new Error("API fetch failed");
  return res.json();
}

export const postsAPI = {
  getAll: (page = '1', limit = '10') => fetcher<Post[]>(`${API_BASE}/articles`, page, limit),
  getById: (id: string) => fetcher<Post>(`${API_BASE}/articles/${id}`),
};
