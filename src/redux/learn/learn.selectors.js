import { createSelector } from 'reselect';

const selectLearn = state => state.learn;

export const selectCourses = createSelector(
  [selectLearn],
  learn => learn.courses
)

export const selectWeeks = createSelector(
  [selectCourses],
  courses => null
)

export const selectActivities = createSelector(
  [selectWeeks],
  weeks => null
)

export const selectLessons = createSelector(
  [selectActivities],
  activities => null
)