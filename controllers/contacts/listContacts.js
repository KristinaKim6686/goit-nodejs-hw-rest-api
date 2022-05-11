const { Contact } = require("../../models/contact");

async function listContacts(req, res) {
  const { _id } = req.user;
  const response = await Contact.find({ owner: _id });
  res.json({
    status: "success",
    code: 200,
    data: {
      response,
    },
  });
}

module.exports = listContacts;
