import {addNewContact, getContacts, getContactWithID} from '../controllers/crmController'
const routes = (app) => {
  // first route
  app.route('/contact')
  .get((req, res, next) => {
    //middleware
    console.log(`request from: ${req.orignalUrl}`)
    console.log(`request type: ${req.method}`)
    next();
  }, getContacts)
   // get route
  .post(addNewContact) // post route

  // second route
  app.route('/contact/:contactID')
    .get(getContactWithID)
    .put((req, res) => res.send('PUT request successfull!'))
    .delete((req, res) => res.send('DELETE request successfull!'))
}

export default routes;
