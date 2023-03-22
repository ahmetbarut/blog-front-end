import Post from "./Post";
import PostLinks from "./PostLinks";
import { Posts } from "./Posts";

export default interface ApiResourcePosts{
    data: Post[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
    links: PostLinks[]
}