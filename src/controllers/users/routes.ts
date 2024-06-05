import { Router } from "express"
import users from "./controller";

const router = Router();
const { createUser, getUsers } = users;

router.get('/', getUsers);
router.post('/', createUser);

export default router;
