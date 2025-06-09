import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createBlogPostSchema, updateBlogPostSchema } from "../schemas/blogPost.schema.js";
import { createBlogPost, deleteBlogPost, getBlogPostById, getBlogPosts, updateBlogPost } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/",getBlogPosts);
router.post("/",authenticate,validate(createBlogPostSchema),createBlogPost);
router.get("/:id",getBlogPostById);
router.put("/:id",authenticate, validate(updateBlogPostSchema),updateBlogPost);
router.delete("/:id",authenticate,deleteBlogPost)

export default router

