import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "myFirstTable" */
  deleteMyFirstTabl?: Maybe<MyFirstTable>;
  /** delete data from the table: "myFirstTable" */
  deleteMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
  /** insert a single row into the table: "myFirstTable" */
  insertMyFirstTabl?: Maybe<MyFirstTable>;
  /** insert data into the table: "myFirstTable" */
  insertMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
  /** update single row of the table: "myFirstTable" */
  updateMyFirstTabl?: Maybe<MyFirstTable>;
  /** update data of the table: "myFirstTable" */
  updateMyFirstTable?: Maybe<MyFirstTable_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDeleteMyFirstTablArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteMyFirstTableArgs = {
  where: MyFirstTable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertMyFirstTablArgs = {
  object: MyFirstTable_Insert_Input;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertMyFirstTableArgs = {
  objects: Array<MyFirstTable_Insert_Input>;
  on_conflict?: InputMaybe<MyFirstTable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateMyFirstTablArgs = {
  _set?: InputMaybe<MyFirstTable_Set_Input>;
  pk_columns: MyFirstTable_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateMyFirstTableArgs = {
  _set?: InputMaybe<MyFirstTable_Set_Input>;
  where: MyFirstTable_Bool_Exp;
};

/** columns and relationships of "myFirstTable" */
export type MyFirstTable = {
  __typename?: 'myFirstTable';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  vip: Scalars['Boolean'];
};

/** aggregated selection of "myFirstTable" */
export type MyFirstTable_Aggregate = {
  __typename?: 'myFirstTable_aggregate';
  aggregate?: Maybe<MyFirstTable_Aggregate_Fields>;
  nodes: Array<MyFirstTable>;
};

/** aggregate fields of "myFirstTable" */
export type MyFirstTable_Aggregate_Fields = {
  __typename?: 'myFirstTable_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MyFirstTable_Max_Fields>;
  min?: Maybe<MyFirstTable_Min_Fields>;
};


/** aggregate fields of "myFirstTable" */
export type MyFirstTable_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "myFirstTable". All fields are combined with a logical 'AND'. */
export type MyFirstTable_Bool_Exp = {
  _and?: InputMaybe<Array<MyFirstTable_Bool_Exp>>;
  _not?: InputMaybe<MyFirstTable_Bool_Exp>;
  _or?: InputMaybe<Array<MyFirstTable_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "myFirstTable" */
export enum MyFirstTable_Constraint {
  /** unique or primary key constraint on columns "id" */
  MyFirstTablePkey = 'myFirstTable_pkey'
}

/** input type for inserting data into table "myFirstTable" */
export type MyFirstTable_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type MyFirstTable_Max_Fields = {
  __typename?: 'myFirstTable_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MyFirstTable_Min_Fields = {
  __typename?: 'myFirstTable_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "myFirstTable" */
export type MyFirstTable_Mutation_Response = {
  __typename?: 'myFirstTable_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MyFirstTable>;
};

/** on_conflict condition type for table "myFirstTable" */
export type MyFirstTable_On_Conflict = {
  constraint: MyFirstTable_Constraint;
  update_columns?: Array<MyFirstTable_Update_Column>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

/** Ordering options when selecting data from "myFirstTable". */
export type MyFirstTable_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: myFirstTable */
export type MyFirstTable_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "myFirstTable" */
export enum MyFirstTable_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "myFirstTable" */
export type MyFirstTable_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "myFirstTable" */
export enum MyFirstTable_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "myFirstTable" using primary key columns */
  myFirstTabl?: Maybe<MyFirstTable>;
  /** fetch data from the table: "myFirstTable" */
  myFirstTable: Array<MyFirstTable>;
  /** fetch aggregated fields from the table: "myFirstTable" */
  myFirstTableAggregate: MyFirstTable_Aggregate;
};


export type Query_RootMyFirstTablArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMyFirstTableArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};


export type Query_RootMyFirstTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "myFirstTable" using primary key columns */
  myFirstTabl?: Maybe<MyFirstTable>;
  /** fetch data from the table: "myFirstTable" */
  myFirstTable: Array<MyFirstTable>;
  /** fetch aggregated fields from the table: "myFirstTable" */
  myFirstTableAggregate: MyFirstTable_Aggregate;
};


export type Subscription_RootMyFirstTablArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMyFirstTableArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};


export type Subscription_RootMyFirstTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<MyFirstTable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MyFirstTable_Order_By>>;
  where?: InputMaybe<MyFirstTable_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };


export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};