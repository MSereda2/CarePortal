
export const getProfileImg = (state: any) => state.login.currentUser.photoURL;
export const getIsAuth = (state: any) => state.login.currentUser.id;
export const getUserData = (state: any) => state.login.currentUser;