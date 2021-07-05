import { 
        addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
    } from '../controllers/contactController';
import { login, register, loginRequired } from '../controllers/userController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Method type: ${req.method}`);
            next();
        }, loginRequired, getContacts)
            
        //* Post endpoint *//
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactID')
        //* get a specific contact *//
        .get(loginRequired, getContactWithID)

        //* update a specific contact *//
        .put(loginRequired, updateContact)

        //* delete a specific contact *//
        .delete(loginRequired, deleteContact);
    
    //* registration route *//
    app.route('/auth/register')
        .post(register);

    //* login route *//
    app.route('/login')
        .post(login);

}

export default routes;