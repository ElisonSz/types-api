"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const authcontroller_1 = require("../controllers/authcontroller");
router.post("/signup", authcontroller_1.signup);
router.post("/signin", authcontroller_1.signin);
router.get("/profile", authcontroller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map