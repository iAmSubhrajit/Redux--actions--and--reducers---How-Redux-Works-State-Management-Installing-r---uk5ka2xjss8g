/*
Here all the actions are defined.
Example of defining an actoin is as follows
export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}
*/
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const onSignIn = (e) => {
  return {
    type: SIGN_IN,
    payload: e
  }
}
export const onSignOut = () => {
  return {
    type: SIGN_OUT,
  }
}