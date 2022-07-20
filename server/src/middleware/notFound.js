// Handle nonexistent routes
const notFound = (req, res) =>
  res.status(404).json({ success: false, error: "Route does not exist" });

export default notFound;
