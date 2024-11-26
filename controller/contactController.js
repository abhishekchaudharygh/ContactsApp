// @desc get all conatacts
const getContacts = (req, res) => {
    res.status(200).json({"message" : "Number likho 98"})
};

// @desc Create new conatact
const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({"message" : "Create Contact"})
};

// @desc get a conatact
const getContact = (req, res) => {
    res.status(200).json({"message" : `Contact for ${req.params.id}`})
};

// @desc update a conatact
const updateContact = (req, res) => {
    res.status(200).json({"message" : `Updated Contact for ${req.params.id}`})
};

// @desc delete a conatact
const deleteContact = (req, res) => {
    res.status(200).json({"message" : `Deleted Contact for ${req.params.id}`})
};


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};