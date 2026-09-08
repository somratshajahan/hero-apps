const getInstalledApps = () => {
  const data = localStorage.getItem("installedApps");
 
  return data ? JSON.parse(data) : [];
};

const saveAppToLocalStorage = (app) => {
  if (!app) return { success: false, message: "Invalid App Data!" };

  const installedApps = getInstalledApps(); 
  const isExist = installedApps.some((item) => item.id === app.id);

  if (isExist) {
    return { success: false, message: "Already Installed!" };
  }

  installedApps.push(app);
  localStorage.setItem("installedApps", JSON.stringify(installedApps));
  return { success: true, message: "Successfully Installed!" };
};

export { saveAppToLocalStorage, getInstalledApps };