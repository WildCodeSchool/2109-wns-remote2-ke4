export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum EnumProrityTicket {
  Important = 'IMPORTANT',
  Light = 'LIGHT',
  Medium = 'MEDIUM'
}

export enum EnumProrityTicketUpdate {
  Important = 'IMPORTANT',
  Light = 'LIGHT',
  Medium = 'MEDIUM'
}

/** Mutations of Ke4 */
export type RootMutation = {
  __typename?: 'RootMutation';
  createComment?: Maybe<TypeComment>;
  createProject?: Maybe<TypeProject>;
  createTicket?: Maybe<TypeTicket>;
  createWorkColleague?: Maybe<TypeUser>;
  deleteComment: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteTicket?: Maybe<Scalars['Boolean']>;
  deleteUser: Scalars['Boolean'];
  deleteWorkColleague?: Maybe<Scalars['Boolean']>;
  login: Scalars['String'];
  passwordForgot: Scalars['Boolean'];
  projectFav?: Maybe<TypeProject>;
  registerUser: Scalars['String'];
  resetPassword: Scalars['Boolean'];
  resetPasswordViewer?: Maybe<Scalars['Boolean']>;
  updateProject?: Maybe<TypeProject>;
  updateTicket?: Maybe<TypeTicket>;
  updateUser: TypeUser;
  uploadAvatar?: Maybe<TypeUser>;
};


/** Mutations of Ke4 */
export type RootMutationCreateCommentArgs = {
  content?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['String']>;
  ticketId?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationCreateProjectArgs = {
  client?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  estimatedTime?: InputMaybe<Scalars['String']>;
  investedTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** Mutations of Ke4 */
export type RootMutationCreateTicketArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<EnumProrityTicket>;
  progress?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['String']>;
  ressources?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutations of Ke4 */
export type RootMutationCreateWorkColleagueArgs = {
  workColleagueId: Scalars['ID'];
};


/** Mutations of Ke4 */
export type RootMutationDeleteCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Mutations of Ke4 */
export type RootMutationDeleteProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Mutations of Ke4 */
export type RootMutationDeleteTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Mutations of Ke4 */
export type RootMutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Mutations of Ke4 */
export type RootMutationDeleteWorkColleagueArgs = {
  workColleagueId: Scalars['ID'];
};


/** Mutations of Ke4 */
export type RootMutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  mdp?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationPasswordForgotArgs = {
  email?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationProjectFavArgs = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['ID']>;
};


/** Mutations of Ke4 */
export type RootMutationRegisterUserArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mdp?: InputMaybe<Scalars['String']>;
  pseudo?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationResetPasswordArgs = {
  newMdp?: InputMaybe<Scalars['String']>;
  tokenURL?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationResetPasswordViewerArgs = {
  newMdp?: InputMaybe<Scalars['String']>;
  oldPassword?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationUpdateProjectArgs = {
  author?: InputMaybe<Scalars['String']>;
  client?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  estimatedTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  investedTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** Mutations of Ke4 */
export type RootMutationUpdateTicketArgs = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<EnumProrityTicketUpdate>;
  progress?: InputMaybe<Scalars['Int']>;
  ressources?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutations of Ke4 */
export type RootMutationUpdateUserArgs = {
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  pseudo?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};


/** Mutations of Ke4 */
export type RootMutationUploadAvatarArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};

/** Queries of tzar */
export type RootQueries = {
  __typename?: 'RootQueries';
  getAllCommentsByTicketId?: Maybe<Array<Maybe<TypeComment>>>;
  getAllProjects?: Maybe<Array<Maybe<TypeProject>>>;
  getAllProjectsByUserId?: Maybe<Array<Maybe<TypeProject>>>;
  getAllProjectsByViewer?: Maybe<Array<Maybe<TypeProject>>>;
  getAllTickets?: Maybe<Array<Maybe<TypeTicket>>>;
  getAllTicketsByProjectId?: Maybe<Array<Maybe<TypeTicket>>>;
  getAllUsers?: Maybe<Array<Maybe<TypeUser>>>;
  getManyDevAssign?: Maybe<Array<Maybe<TypeUser>>>;
  getManyWorkColleague?: Maybe<Array<Maybe<TypeUser>>>;
  getProjectById: TypeProject;
  getSearchUser?: Maybe<Array<Maybe<TypeUser>>>;
  getTicketById: TypeTicket;
  getUserById: TypeUser;
  getViewer?: Maybe<TypeUser>;
};


/** Queries of tzar */
export type RootQueriesGetAllCommentsByTicketIdArgs = {
  id: Scalars['ID'];
};


/** Queries of tzar */
export type RootQueriesGetAllProjectsByUserIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Queries of tzar */
export type RootQueriesGetAllProjectsByViewerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Queries of tzar */
export type RootQueriesGetAllTicketsByProjectIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Queries of tzar */
export type RootQueriesGetProjectByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Queries of tzar */
export type RootQueriesGetSearchUserArgs = {
  search?: InputMaybe<Scalars['String']>;
};


/** Queries of tzar */
export type RootQueriesGetTicketByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Queries of tzar */
export type RootQueriesGetUserByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TypeComment = {
  __typename?: 'TypeComment';
  author?: Maybe<TypeUser>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  postDate?: Maybe<Scalars['String']>;
};

export type TypeProject = {
  __typename?: 'TypeProject';
  author?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  devs?: Maybe<Array<Maybe<TypeUser>>>;
  estimatedTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  investedTime?: Maybe<Scalars['String']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  numberDev?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tickets?: Maybe<Array<Maybe<TypeTicket>>>;
};

export type TypeTicket = {
  __typename?: 'TypeTicket';
  description?: Maybe<Scalars['String']>;
  devs?: Maybe<Array<Maybe<TypeUser>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Int']>;
  ressources?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
};

export type TypeUser = {
  __typename?: 'TypeUser';
  avatar?: Maybe<Scalars['String']>;
  dateMember?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  numberFriendly?: Maybe<Scalars['Int']>;
  projects?: Maybe<Array<Maybe<TypeProject>>>;
  pseudo: Scalars['String'];
  role?: Maybe<Array<Maybe<Scalars['String']>>>;
};
