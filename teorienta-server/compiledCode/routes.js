"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.post('/users', (req, res) => {
    return res.status(201).send();
});
//# sourceMappingURL=routes.js.map