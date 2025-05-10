import { createSlice } from "@reduxjs/toolkit";


type ClientType = {
    id: number;
    name: string;
    rfc: string;
    email: string;
    phone: string;
}

type InvoiceType = {
    id: number;
    amount: number;
    status: 'pending' | 'paid';
    dueDate: Date;
    clientId: ClientType;
};

const initialState: InvoiceType = {
    id: 0,
    amount: 0,
    status: 'pending',
    dueDate: new Date(),
    clientId: {
        id: 0,
        name: '',
        rfc: '',
        email: '',
        phone: ''
    }

};

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: initialState,
    reducers: {
        viewInvoice: (state) => {
            return state;
        },
        newInvoice: (state, action) => {
            state.id = action.payload.id;
            state.amount = action.payload.amount;
            state.status = action.payload.status;
            state.dueDate = action.payload.dueDate;
            state.clientId = action.payload.clientId;
        },
        editInvoice: (state, action) => {
            const { id, amount, status, dueDate, clientId } = action.payload;
            if (state.id === id) {
                state.amount = amount;
                state.status = status;
                state.dueDate = dueDate;
                state.clientId = clientId;
            }
        },
        deleteInvoice: (state) => {
            state.id = 0;
            state.amount = 0;
            state.status = 'pending';
            state.dueDate = new Date();
            state.clientId = {
                id: 0,
                name: '',
                rfc: '',
                email: '',
                phone: ''
            };
        }
    }
});

export const { viewInvoice, newInvoice, editInvoice, deleteInvoice } = invoiceSlice.actions;

