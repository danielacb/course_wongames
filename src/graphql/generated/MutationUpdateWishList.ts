/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishList
// ====================================================

export interface MutationUpdateWishList_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishList_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationUpdateWishList_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: MutationUpdateWishList_updateWishlist_wishlist_games_cover | null;
  developers: MutationUpdateWishList_updateWishlist_wishlist_games_developers[];
  price: number;
}

export interface MutationUpdateWishList_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutationUpdateWishList_updateWishlist_wishlist_games[];
}

export interface MutationUpdateWishList_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishList_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishList {
  updateWishlist: MutationUpdateWishList_updateWishlist | null;
}

export interface MutationUpdateWishListVariables {
  input: updateWishlistInput;
}
