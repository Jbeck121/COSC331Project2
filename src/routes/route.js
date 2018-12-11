import {
  addNewContact,
  getContacts,
  getSpecificContact,
  updateContact,
  deleteContact
} from "../controllers/controller";

const routes = app => {
  //Contact Route
  app
    .route("/contact")
    .get(getContacts)
    .post(addNewContact);

  //Contact ID routes

  app
    .route("/contact/:contactId")
    .get(getSpecificContact)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
