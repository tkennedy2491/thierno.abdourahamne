import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

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

interface ListAllUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllUsersData, undefined>;
  operationName: string;
}
export const listAllUsersRef: ListAllUsersRef;

export function listAllUsers(): QueryPromise<ListAllUsersData, undefined>;
export function listAllUsers(dc: DataConnect): QueryPromise<ListAllUsersData, undefined>;

interface GetMyProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
  operationName: string;
}
export const getMyProjectsRef: GetMyProjectsRef;

export function getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;
export function getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;
export function createSkill(dc: DataConnect, vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;

interface UpdateMyBioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMyBioVariables): MutationRef<UpdateMyBioData, UpdateMyBioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMyBioVariables): MutationRef<UpdateMyBioData, UpdateMyBioVariables>;
  operationName: string;
}
export const updateMyBioRef: UpdateMyBioRef;

export function updateMyBio(vars: UpdateMyBioVariables): MutationPromise<UpdateMyBioData, UpdateMyBioVariables>;
export function updateMyBio(dc: DataConnect, vars: UpdateMyBioVariables): MutationPromise<UpdateMyBioData, UpdateMyBioVariables>;

