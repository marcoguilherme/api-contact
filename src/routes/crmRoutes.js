import { addNewContact, getContacts,getContactById, updadateContact, removeContact } from '../controllers/crmControllers';
import { login, loginRequired, register } from '../controllers/userControllers';
const routes = (app) => {

    //Contact Route
    app.route('/contact')
        .get(loginRequired, getContacts)
        .post(loginRequired, addNewContact);

    //Contact by ID Route
    app.route('/contact/:contactId')
        .get(loginRequired, getContactById)
        .put(loginRequired, updadateContact)
        .delete(loginRequired, removeContact);

    //Registration route
    app.route('/auth/register')
        .post(register);
    
    //login route
    app.route('/auth/login')
        .post(login);
} 

export default routes;