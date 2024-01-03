export const login = (data: any) => {
  return {
    type: "user/login",
    payload: data
  };
};
export const init = (data: any) => {
  return {
    type: "init",
    payload: data
  };
};
export const logout = (data: any) => {
  return {
    type: "user/logout",
    payload: data
  };
};
export const saveViewed = (data: any) => {
  return {
    type: "viewed/add",
    payload: data
  };
};
export const removeAllViewed = () => {
  return {
    type: "viewed/removeAll",
    payload: null
  };
};

export const removeItem = (data: any) => {
  return {
    type: "viewed/removeItem",
    payload: data
  };
};

export const lockUser= (data: any) => {
  return {
    type: "user/lock",
    payload: data
  };
}
