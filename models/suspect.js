const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SuspectSchema = new Schema({
    citizenId: String,
    forenames: String,
    surname: String,
    homeAddress: String,
    dateOfBirth: String,
    placeOfBirth: String,
    sex: String,
    bankAccountId: String,
    accountNumber: String,
    bank: String,
    phoneNumber: String,
    network: String,
    registrationId: String,
    driverLicenceId: String,
    vehicleRegistrationNo: String,
    registrationDate: String,
    make: String,
    model: String,
    colour: String,
});

module.exports = Suspect = mongoose.model("suspect", SuspectSchema);