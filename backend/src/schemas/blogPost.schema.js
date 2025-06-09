import {z} from "zod";

export const createBlogPostSchema = z.object({
    title:z.string().min(3),
    content:z.string().min(10)
});

export const updateBlogPostSchema = z.object({
    title:z.string().min(3).optional(),
    content:z.string().min(10).optional
});
