const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listAllUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllUsers');
}
listAllUsersRef.operationName = 'ListAllUsers';
exports.listAllUsersRef = listAllUsersRef;

exports.listAllUsers = function listAllUsers(dc) {
  return executeQuery(listAllUsersRef(dc));
};

const getMyProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyProjects');
}
getMyProjectsRef.operationName = 'GetMyProjects';
exports.getMyProjectsRef = getMyProjectsRef;

exports.getMyProjects = function getMyProjects(dc) {
  return executeQuery(getMyProjectsRef(dc));
};

const createSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkill', inputVars);
}
createSkillRef.operationName = 'CreateSkill';
exports.createSkillRef = createSkillRef;

exports.createSkill = function createSkill(dcOrVars, vars) {
  return executeMutation(createSkillRef(dcOrVars, vars));
};

const updateMyBioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMyBio', inputVars);
}
updateMyBioRef.operationName = 'UpdateMyBio';
exports.updateMyBioRef = updateMyBioRef;

exports.updateMyBio = function updateMyBio(dcOrVars, vars) {
  return executeMutation(updateMyBioRef(dcOrVars, vars));
};
