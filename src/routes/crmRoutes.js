import {addNewContact, 
  getContacts,
  deleteContact,
  updateContact,
   getContactWithID} from '../controllers/crmController'
const routes = (app) => {
  // first route
  app.route('/contact')
  .get((req, res, next) => {
    //middleware
    console.log(`request from: ${req.orignalUrl}`)
    console.log(`request type: ${req.method}`)
    next();
  }, getContacts)
   // POST ENDPOINT
  .post(addNewContact) // post route

  // second route
  app.route('/contact/:contactID')
  // GET A SPECIFIC CONTACT
    .get(getContactWithID)

  // UPDADING A SPECIFIC CONTACT  
    .put(updateContact)

  // DELETING A SPECIFIC CONTACT  
    .delete(deleteContact)
}

export default routes;
