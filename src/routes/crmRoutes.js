import { addNewContact, getContacts,getContactById, updadateContact, removeContact } from '../controllers/crmControllers';

const routes = (app) => {

    //Contact Route
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);

    //Contact by ID Route
    app.route('/contact/:contactId')
        .get(getContactById)
        .put(updadateContact)
        .delete(removeContact)
} 

export default routes;