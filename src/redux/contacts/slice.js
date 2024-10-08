import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { apiLogout } from '../auth/operations'

const initial_state = {
    contacts: {
        items: [],
        loading: false,
        error: null
    }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initial_state,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items = action.payload
    })
    .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })


    .addCase(addContact.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items.push(action.payload)
    })
    .addCase(addContact.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })


    .addCase(deleteContact.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items = state.contacts.items.filter(contact => contact.id != action.payload.id)
    })
    .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })

    .addCase(apiLogout.fulfilled, state => {
        state.contacts.items = []
    })
})

export default contactsSlice.reducer

