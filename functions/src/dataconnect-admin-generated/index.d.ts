import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface CreateSkillData {
  skill: Skill_Key;
}

export interface CreateSkillVariables {
  name: string;
  proficiency?: string | null;
}

export interface Education_Key {
  id: UUIDString;
  __typename?: 'Education_Key';
}

export interface Experience_Key {
  id: UUIDString;
  __typename?: 'Experience_Key';
}

export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    projectUrl?: string | null;
    isFeatured?: boolean | null;
  } & Project_Key)[];
}

export interface ListAllUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    photoUrl?: string | null;
  } & User_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateMyBioData {
  user_update?: User_Key | null;
}

export interface UpdateMyBioVariables {
  bio: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'ListAllUsers' Query. Allow users to execute without passing in DataConnect. */
export function listAllUsers(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllUsersData>>;
/** Generated Node Admin SDK operation action function for the 'ListAllUsers' Query. Allow users to pass in custom DataConnect instances. */
export function listAllUsers(options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllUsersData>>;

/** Generated Node Admin SDK operation action function for the 'GetMyProjects' Query. Allow users to execute without passing in DataConnect. */
export function getMyProjects(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyProjectsData>>;
/** Generated Node Admin SDK operation action function for the 'GetMyProjects' Query. Allow users to pass in custom DataConnect instances. */
export function getMyProjects(options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyProjectsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateSkill' Mutation. Allow users to execute without passing in DataConnect. */
export function createSkill(dc: DataConnect, vars: CreateSkillVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateSkillData>>;
/** Generated Node Admin SDK operation action function for the 'CreateSkill' Mutation. Allow users to pass in custom DataConnect instances. */
export function createSkill(vars: CreateSkillVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateSkillData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateMyBio' Mutation. Allow users to execute without passing in DataConnect. */
export function updateMyBio(dc: DataConnect, vars: UpdateMyBioVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateMyBioData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateMyBio' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateMyBio(vars: UpdateMyBioVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateMyBioData>>;

