const { Invoice } = require('../model/invoice.model');
const { msg } = require('../../../messages/message');


exports.createInvoice = async (data) => {
    let inv = new Invoice(data);
    let res = await inv.save();
    if (!res) msg.notCreated;
    return res;
};

//Get discount code (by id, by code Or all)
exports.getInvoice = async (query) => { // id is discount _id
    if ("id" in query) query = { "_id": query.id };
    let res = await Invoice.find(query).lean();
    return res;
};

exports.updateInvoice = async (data, id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    let res = await Invoice.findByIdAndUpdate(id, { $set: data }, { new: true }).lean();
    return res;
};

exports.deleteInvoice = async (id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    await Invoice.findByIdAndDelete(id).lean();
    return { message: "Deleted successfully" };
};