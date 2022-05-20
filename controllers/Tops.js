const TopsModel = require('../model/tops')
// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.id && !req.body.category && !req.body.title && !req.body.description) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const tops = new TopsModel({
        id: req.id,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description
    });

    await tops.save().then(data => {
        res.send({
            message:"New top created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new top"
        });
    });
};

// Retrieve all tops from the database.
exports.findAll = async (req, res) => {
    try {
        const tops = await TopsModel.find();
        res.status(200).json(tops);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const tops = await TopsModel.findById(req.params.id);
        res.status(200).json(tops);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a admin by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await TopsModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `a Top not found.`
            });
        }else{
            res.send({ message: "Top is updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete an admin with the specified id in the request
exports.destroy = async (req, res) => {
    await TopsModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Tops not found.`
            });
        } else {
            res.send({
                message: "top's deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};