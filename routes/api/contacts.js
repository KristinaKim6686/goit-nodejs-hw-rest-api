const express = require("express");
const router = express.Router();
const contactControls = require("../../controllers");
const { validation } = require("../../middlewares");
const { ctrlWrapper } = require("../../middlewares");
const { addContactSchema, updateContactSchema } = require("../../schemas");

router.get("/", ctrlWrapper(contactControls.listContacts));

router.get("/:contactId", ctrlWrapper(contactControls.getById));

router.post(
  "/",
  validation(addContactSchema),
  ctrlWrapper(contactControls.addContact)
);

router.delete("/:contactId", ctrlWrapper(contactControls.removeContact));

router.put(
  "/:contactId",
  validation(updateContactSchema),
  ctrlWrapper(contactControls.updateContact)
);

module.exports = router;
