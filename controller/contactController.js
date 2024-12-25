
import { catchError } from "./../middleware/CatchError.js";
import ContactModel from "./../models/ContactModel.js";
const getAllConatcts = catchError(async (req, res) => {
  const contacts = await ContactModel.find();
  res.status(200).json({ message: "success", contacts });
});
const createContact = catchError(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field is mandatory !");
  }
  const contacts = new ContactModel({ name, email, phone,userId:req.user.userId});
  await contacts.save()
  res.status(201).json({ message: "success", contacts });
});
const updateContact = catchError(async (req, res) => {

  const contact = await ContactModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }

  res.status(200).json({ message: `success`, contact })
  });
const getContact = catchError(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id).populate("userId","userName");
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  res.status(200).json({ message: `success`, contact });
});
const deleteContact = catchError(async (req, res) => {
  const contact = await ContactModel.findByIdAndDelete(req.params.id);
  if(!contact){
    res.status(404)
    throw new Error("Contact not found")
  }
  res.status(200).json({ message: `success`, contact });
});

export {
  getAllConatcts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
