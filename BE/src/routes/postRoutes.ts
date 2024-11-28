import { Router } from "express";

import { createPost, deletePost, getPosts } from "../controllers";

const postRouter: Router = Router();
postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
