import Author from "./Author";
import Category from "./Category";

export default interface Post {
    id?: number;
    title: string;
    body: string;
    author: Author;
    summary?: string;
    slug: string;
    status?: string;
    views?: number;
    category: Category;
    created_at: string;
}