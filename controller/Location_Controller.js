const LocationModel = require('../model/Location')





// searching new on address
// get
exports.SearchingAddress = async (req, res) => {

    const Searching = req.query.Searching


    try {
        let result = await LocationModel.find({ address: Searching })

        return res.status(200).json({ message: result })

    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }
}


// create new location address 
exports.CreateNew = async (req, res) => {

    const { address, city, location } = req.body
    try {

        let createnew = await LocationModel.find({ address: address?.toLowerCase().trim() })
        if (createnew) res.status(404).json({ message: 'we have some address.' })

        createnew = new LocationModel({
            user: req.user._id,
            address,
            city,
            location,
        })
        let locationsave = await createnew.save()

        return res.status(201).json(locationsave)


    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }
}



// find an old address
exports.FindOldAddress = async (req, res) => {
    try {

        let findaddress = await LocationModel.findOne({ user: req.user._id })
            .sort({ createdAt: -1 })
        if (findaddress) return res.status(200).json(findaddress)
        return res.status(200).json('he has no old address')

    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }
}