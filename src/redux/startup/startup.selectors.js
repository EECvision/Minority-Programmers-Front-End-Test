import { createSelector } from 'reselect';

const selectStartup = state => state.startup;

export const selectStartups = createSelector(
  [selectStartup],
  startup => startup.startups
);

