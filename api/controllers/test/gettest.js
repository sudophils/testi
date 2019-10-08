module.exports = async function gettest(req, res) {
  return res.status(200).json({ valid: 'test executed' });
};
