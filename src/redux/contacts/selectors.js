import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilters } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilters],
  (contacts, nameFilters) => {
    const filterName = nameFilters?.toLowerCase() || "";
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName)
    );
  }
);
