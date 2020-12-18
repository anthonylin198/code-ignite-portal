module.exports = (req, res) => {
  if (req.method === "GET") {
    res.json([
      { name: "James", location: "North Carolina" },
      { name: "George", location: "New Jersey" },
    ]);
  }
};
