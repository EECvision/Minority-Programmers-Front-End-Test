import { createSelector } from 'reselect';

const selectLearn = state => state.learn;

export const selectCourses = createSelector(
  [selectLearn],
  learn => learn.courses
)

export const selectCoursesForView = createSelector(
  [selectCourses],
  courses => Object.keys(courses).map(key => courses[key])
);

export const selectCourse = courseParam => createSelector(
  [selectCourses],
  courses => courses[courseParam]
);

export const selectWeek = ({courseId, weekId}) => createSelector(
  [selectCourses],
  courses => courses[courseId].module[weekId]
);

export const selectActivity = ({courseId, weekId, activityId}) => createSelector(
  [selectCourses],
  courses => courses[courseId].module[weekId].activity[activityId]
);
