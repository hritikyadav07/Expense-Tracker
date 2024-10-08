import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  income: [],
  totalExpense: 0,
  currentMoney: 0, // Income - total expenses
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = action.payload;
      state.expenses.push(newExpense);
      state.totalExpense += newExpense.amount;
      state.currentMoney = state.income - state.totalExpense;
    },
    setIncome: (state, action) => {
      state.income = action.payload;
      state.currentMoney = state.income - state.totalExpense;
    },
  },
});

export const { addExpense, setIncome } = expenseSlice.actions;

export default expenseSlice.reducer;
