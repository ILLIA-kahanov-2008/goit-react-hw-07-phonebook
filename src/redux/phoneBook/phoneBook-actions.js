import { createAction } from '@reduxjs/toolkit';

export const filteringValue = createAction('contacts/changeFilter');
export const resetError = createAction('error/reset');
