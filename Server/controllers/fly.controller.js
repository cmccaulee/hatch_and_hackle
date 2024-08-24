import Fly from "../models/fly.model.js";

async function create(req, res, next) {
    try {
        const newFly = await Fly.create(req.body)
        res.json(newFly);
    } catch (error) {
        next(error);
    }
};

async function getAll(req, res, next) {
    try {
        const flies = await Fly.find();
        res.json(flies);
    } catch (error) {
        next(error);
    }
}

async function getOne(req, res, next) {
    try {
        const fly = await Fly.findById(req.params.id);
        res.json(fly);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    const options = { new: true, runValidators: true };
    try {
        const updatedFly = await Fly.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedFly);
    } catch (error) {
        next(error);
    }
}
async function deleteOne(req, res, next) {
    try {
        const deletedFly = await Fly.findByIdAndDelete(req.params.id);
        res.json(deletedFly);
    } catch (error) {
        next(error);

    }
}

export { create, getAll, getOne, update, deleteOne };