const useAuth = (): Admin | undefined => {
  const userJSON = localStorage.getItem("auth");
  if (userJSON) {
    return JSON.parse(userJSON);
  }
};

export default useAuth;
