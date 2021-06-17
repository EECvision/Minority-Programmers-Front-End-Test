import { createSelector } from 'reselect';

const selectStartup = state => state.startup;

export const selectStartups = createSelector(
  [selectStartup],
  startup => startup.startups
);

export const selectStartupsForDisplay = createSelector(
  [selectStartups],
  startups => Object.keys(startups).map(key => startups[key])
);

export const selectStartupDetails = startupParam => createSelector(
  [selectStartups],
  startups => startups[startupParam]
);