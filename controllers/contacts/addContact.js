const contactOperations = require("../../models");

async function addContact(req, res, next) {
  const newContact = await contactOperations.addContact(req.body);
  res.status(201).json({
    status: "201",
    data: {
      newContact,
    },
  });
}

module.exports = addContact;
