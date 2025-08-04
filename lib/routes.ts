
type AppRoutes = {
    [key: string]: {
      en: string;
      es: string;
    };
  };
  
  export const routes: AppRoutes = {
    home: {
      en: "/",
      es: "/",
    },
    projects: {
      en: "/projects",
      es: "/proyectos",
    },
    resources: {
      en: "/resources",
      es: "/recursos",
    },

  };