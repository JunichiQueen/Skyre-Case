const express = require('express');
const router = express.Router();

const Suspect = require('../models/suspect');

router.get('/', (req, res) => {
    const errors = {};
    Suspect.find().then(suspects => {
        if (!suspects) {
            errors.noSuspects = "There are no suspects";
            res.status(404).json(errors);
        }

        res.json(suspects);
    })
    .catch(err => res.status(404).json({ noSuspects: "There are no suspects"}));
});

router.post('/addSuspect', (req, res) => {

    const newSuspect = new Suspect({
            citizenId: req.body.citizenId,
            forenames: req.body.forenames,
            surname: req.body.surname,
            address: req.body.address,
            dateOfBirth: req.body.dateOfBirth,
            placeOfBirth: req.body.placeOfBirth,
            sex: req.body.sex,
            bankAccountId: req.body.bankAccountId,
            accountNumber: req.body.accountNumber,
            bank: req.body.bank,
            phoneNumber: req.body.phoneNumber,
            network: req.body.network,
            registrationId: req.body.registrationId,
            driverlicenseId: req.body.driverlicenceId,
            vehicleRegistrationNo: req.body.vehicleRegistrationNo,
            registrationDate: req.body.registrationDate,
            make: req.body.make,
            model: req.body.model,
            colour: req.body.colour,
    });

    newSuspect.save().then(suspect => res.json(suspect))
    .catch(err => console.log(err));
})

module.exports = router;