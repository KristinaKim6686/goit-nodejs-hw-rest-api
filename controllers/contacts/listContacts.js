const { Contact } = require("../../models/contact");

async function listContacts(req, res) {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id }).populate("owner");
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
}

module.exports = listContacts;
