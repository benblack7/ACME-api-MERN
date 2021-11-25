const Buyers = require('../models/buyers')

createBuyer = (req, res) => {
    console.log("Creating...")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Invalid Data',
        })
    }

    const buyer = new Buyers(body)

    if (!buyer) {
        return res.status(400).json({ success: false, error: err })
    }

    buyer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: buyer._id,
                message: 'Buyer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Buyer not created!',
            })
        })
}

getBuyers = async (req, res) => {
    console.log("Getting Buyers...")
    await Buyers.find({}, (err, buyers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!buyers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Buyer not found` })
        }
        return res.status(200).json({ success: true, data: buyers })
    }).catch(err => console.log(err))
}

module.exports = {
    createBuyer,
    getBuyers
}