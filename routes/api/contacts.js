const express = require("express");
const router = express.Router();
const contactControls = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contact");

router.get("/", auth, ctrlWrapper(contactControls.listContacts));

router.get("/:contactId", ctrlWrapper(contactControls.getById));

router.post(
  "/",
  auth,
  validation(joiSchema),
  ctrlWrapper(contactControls.addContact)
);

router.delete("/:contactId", ctrlWrapper(contactControls.removeContact));

router.put(
  "/:contactId",
  validation(joiSchema),
  ctrlWrapper(contactControls.updateContact)
);
router.patch(
  "/:contactId/status",
  validation(statusJoiSchema),
  ctrlWrapper(contactControls.updateStatus)
);

module.exports = router;
