import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    });
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err)
        }else{
            res.json(contact);
        }
    })
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err){
            res.send('Data connot be found!')
        }else{
            res.json(contact);
        }
    })
}

export const updadateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if(err){
            res.send(err)
        }else{
            res.json(contact)
        }
    })
}
export const removeContact = (req, res) => {
    Contact.findByIdAndRemove({_id: req.params.contactId}, (err, contact) => {
        if(err){
            res.send(err)
        }else{
            res.json({message: 'Data removed'})
        }
    })
}