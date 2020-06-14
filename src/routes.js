import express from 'express'
import getAll from "./quote/getAll";
import create from "./quote/create/create";

let router = express.Router();

router.get('/', getAll);
router.post('/', create);

export default router;
