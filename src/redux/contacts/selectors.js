import { createSelector } from "@reduxjs/toolkit"

export const selectUserContacts = state => state.contacts.contacts.items
export const selectFilter = state => state.filters.filters.name

export const selectFilteredContacts = createSelector(
    [selectUserContacts, selectFilter],
    (contacts, filtredValue) => {
     return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filtredValue.toLowerCase())
      })
    }
)