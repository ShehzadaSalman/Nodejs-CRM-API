import {addNewContact} from '../controllers/crmController'
const routes = (app) => {
  // first route
  app.route('/contact')
  .get((req, res, next) => {
    //middleware
    console.log(`request from: ${req.orignalUrl}`)
    console.log(`request type: ${req.method}`)
    next();
  }, (req, res, next) => {
      res.send("GET request successfull")
  })
   // get route
  .post(addNewContact) // post route

  // second route
  app.route('/contact/:contactID')
    .put((req, res) => res.send('PUT request successfull!'))
    .delete((req, res) => res.send('DELETE request successfull!'))
}

export default routes;
