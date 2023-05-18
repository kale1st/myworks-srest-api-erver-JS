"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const groupcontrollers_1 = __importDefault(require("./groupcontrollers"));
const checkTokenExpiration_1 = __importDefault(require("../../functions/checkTokenExpiration"));
const router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.post('/group/creategroup', [checkTokenExpiration_1.default], groupcontrollers_1.default.createGroup);
router.get('/group/retrievegroups', [checkTokenExpiration_1.default], groupcontrollers_1.default.retrieveGroups);
router.patch('/group/updategroup', [checkTokenExpiration_1.default], groupcontrollers_1.default.updateGroup);
router.delete('/group/deletegroup', [checkTokenExpiration_1.default], groupcontrollers_1.default.deleteGroup);
router.get('/group/retrieveallgroupsnamesoftheuserbyuserid', [checkTokenExpiration_1.default], groupcontrollers_1.default.retrieveAllGroupsNamesOfTheUserByuserId);
router.get('/group/retrievesinglegroupofuserbygroupid', [checkTokenExpiration_1.default], groupcontrollers_1.default.retrieveSingleGroupOfUserByGroupId);
exports.default = router;
