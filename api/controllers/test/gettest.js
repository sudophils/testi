module.exports = async function gettest(req, res) {
  const { title, body } = req.allParams();

  const data = {
    title,
    body
  };

  if (!title) return res.status(404).json({ err: 'title is missing' });
  if (!body) return res.status(404).json({ err: 'title is missing' });
  const post = await Test.create({ test: data }).fetch();

  if (!post) return res.status(400).json({ err: ' no post create' });

  return res.status(200).json({ post: post });
};
