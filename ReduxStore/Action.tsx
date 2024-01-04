export const login = (data: any) => {
  return {
    type: "user/loginUser",
    payload: data
  };
};
export const init = (data: any) => {
  return {
    type: "init",
    payload: data
  };
};
export const logout = () => {
  return {
    type: "user/logout"
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
export const updateUser= (data: any) => {
  return {
    type: "user/update",
    payload: data
  };
}
export const hideCategory = (data: any) => {
  return {
    type: "cate/hidden",
    payload: data
  };
}
