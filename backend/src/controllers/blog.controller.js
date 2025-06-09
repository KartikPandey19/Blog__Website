import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await prisma.post.findMany({
      include: { author: { select: { name: true, email: true } } },
    });
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", errors: error });
  }
};

export const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.userId;

  try {
    const blogPost = await prisma.post.create({
      data: { title, content, authorId: userId },
    });
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({ message: "Failed to create post", errors: error });
  }
};

export const getBlogPostById = async (req, res) => {
  try {
    const blogPost = prisma.post.findUnique({
      where: { id: req.params.id },
      include: { author: true },
    });
    if (!post) return res.status(404).json({ message: "Post not Found" });
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", errors: error });
  }
};

export const updateBlogPost = async (req, res) => {
  try {
    const post = await prisma.post.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", errors: error });
  }
};

export const deleteBlogPost = async(req,res)=>{
    try{
        await prisma.post.delete({where:{id:req.params.id}});
        res.json({message:"Post Deleted"});
    }catch(error){
        res.status(500).json({ message: "Failed to delete post", errors: error });
    }
}
