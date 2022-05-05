const contactOperations = require("../../models");

async function updateContact(req, res, next) {
  const { contactId } = req.params;
  const changedContact = await contactOperations.updateContact({
    id: contactId,
    changedContact: req.body,
  });
  if (!changedContact) {
    const error = new Error("Not found");
    error.status = 404;
  }
  res.json({
    status: "200",
    data: {
      changedContact,
    },
  });
}
module.exports = updateContact;
