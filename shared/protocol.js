exports.protocol = Object.freeze({
  //User Related
  ADD_USER: 1  //[1, aUsername, aEmail, aPassword]
})

exports.vehicles = Object.freeze({
  //vehicles 20-29
  BUILD: 20, //[20, nId, vType]
  DELETE: 22, //[22, vId]
  ROUTE_ADD: 23 //[23, vId, [n1, n2], [n2, n3] ...]
})

exports.structures = Object.freeze({
  //structures 30-39
  BUILD : 30, //[30, nId, sType]
  RECIPE_SET : 31, //[31, sId, sRecipe]
  DELETE : 32 //[32, sId]
})