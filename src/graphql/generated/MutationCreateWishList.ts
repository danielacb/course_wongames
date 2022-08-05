/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateWishList
// ====================================================

export interface MutationCreateWishList_createWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationCreateWishList_createWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationCreateWishList_createWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: MutationCreateWishList_createWishlist_wishlist_games_cover | null;
  developers: MutationCreateWishList_createWishlist_wishlist_games_developers[];
  price: number;
}

export interface MutationCreateWishList_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutationCreateWishList_createWishlist_wishlist_games[];
}

export interface MutationCreateWishList_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutationCreateWishList_createWishlist_wishlist | null;
}

export interface MutationCreateWishList {
  createWishlist: MutationCreateWishList_createWishlist | null;
}

export interface MutationCreateWishListVariables {
  input: createWishlistInput;
}
