import { Router } from 'express'
import { createContact, deleteContact, getAllConatcts, updateContact,getContact } from '../controller/contactController.js'
import { validationToken } from './../middleware/VerifyToken.js';
import { checkRole } from './../controller/checkRole.js';
const ContactRouter=Router()
ContactRouter.use(validationToken)
ContactRouter.route('/').get(getAllConatcts).post(createContact)
ContactRouter.route('/:id').put(checkRole,updateContact).get(checkRole,getContact).delete(checkRole,deleteContact)
export default ContactRouter