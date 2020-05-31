"use strict";

const ApiRouter = require("../../default").ApiRouter;
const ctrl = require("./boardReply-ctrl");

module.exports.register = new ApiRouter({
  name: "",
  method: "post",
  summary: "Register",
  schema: "PostBoardReply",
  tags: ["boardReply"],
  description: "",
  isPublic: true,
  responses: {
    200: { description: "success" }
    //404: { description: "Duplicate board" }
    //409: { description: "Duplicate board" }
  },
  handler: ctrl.register
});

module.exports.getList = new ApiRouter({
  name: "",
  method: "get",
  summary: "GetList",
  schema: "GetBoardReply",
  description: "",
  tags: ["boardReply"],
  isPublic: true,
  responses: {
    200: { description: "Success" }
    //400: { description: "Invalid data" }
  },
  handler: ctrl.getList
});

module.exports.update = new ApiRouter({
  name: ":IDX",
  method: "put",
  summary: "update",
  schema: "UpdateBoardReply",
  tags: ["boardReply"],
  description: "",
  isPublic: true,
  responses: {
    200: { description: "Success" },
    404: { description: "Invalid data" }
  },
  handler: ctrl.update
});

module.exports.delete = new ApiRouter({
  name: ":IDX",
  method: "delete",
  summary: "Delete",
  schema: "DeleteBoardReply",
  tags: ["boardReply"],
  isPublic: true,
  responses: {
    200: { description: "Success" }
    // 400: { description: "Invalid data" },
    // 409: { description: "Already removed" }
  },
  handler: ctrl.delete
});