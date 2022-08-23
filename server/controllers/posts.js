import PostMessage from "../models/postMessage";

const getPosts = async (req, res, next) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res, next) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { getPosts, createPost };
