export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
   
    { section: 'Custom' },
    {
      title: 'Wizards',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-mail-1',
      svg: './assets/media/svg/icons/Shopping/Box1.svg',
      page: '/wizards',
      submenu: [
        {
          title: 'Wizard 1',
          page: '/wizards/wizard-1'
        },
        {
          title: 'Wizard 2',
          page: '/wizards/wizard-2'
        },
        {
          title: 'Wizard 3',
          page: '/wizards/wizard-3'
        },
        {
          title: 'Wizard 4',
          page: '/wizards/wizard-4'
        },
      ]
    },
    {
      title: 'Error Pages',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Code/Warning-2.svg',
      page: '/error',
      submenu: [
        {
          title: 'Error 1',
          page: '/error/error-1'
        },
        {
          title: 'Error 2',
          page: '/error/error-2'
        },
        {
          title: 'Error 3',
          page: '/error/error-3'
        },
        {
          title: 'Error 4',
          page: '/error/error-4'
        },
        {
          title: 'Error 5',
          page: '/error/error-5'
        },
        {
          title: 'Error 6',
          page: '/error/error-6'
        },
      ]
    },
  ]
};
