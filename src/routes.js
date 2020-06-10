import express from 'express'
import getAll from "./quote/getAll";
import create from "./quote/create/create";
import getById from "./quote/getById";
import deleteById from "./quote/deleteById";
let router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteById)
router.post('/', create);

export default router;
