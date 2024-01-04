/**
 * Redux async action creator
 */
export const actionGenerator = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAIL: `${actionName}_FAIL`,
  COMPLETE: `${actionName}_COMPLETE`,
  actionName,
});
