const express = require("express");
const router = express.Router();
const contactsControls = require("../../controllers");
const { validation, auth } = require("../../middlewares");
const { ctrlWrapper } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contact");

router.get("/", ctrlWrapper(contactsControls.listContacts));

router.get("/:contactId", ctrlWrapper(contactsControls.getById));

router.post(
  "/",

  validation(joiSchema),
  ctrlWrapper(contactsControls.addContact)
);

router.delete("/:contactId", ctrlWrapper(contactsControls.removeContact));

router.put(
  "/:contactId",
  validation(joiSchema),
  ctrlWrapper(contactsControls.updateContact)
);
router.patch(
  "/:contactId/status",
  validation(statusJoiSchema),
  ctrlWrapper(contactsControls.updateStatus)
);

module.exports = router;
