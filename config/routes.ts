/*
 * @Descripttion:
 * @version: 1.0
 * @Author:
 * @Date: 2021-10-08 15:46:24
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-09 10:26:14
 */
export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                name: 'dashboardworkplace',
                icon: 'table',
                path: '/dashboardworkplace',
                component: './DashboardWorkplace',
              },
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/todo',
                name: 'todo',
                icon: 'UnorderedListOutlined',
                component: './Todo',
              },
              {
                path: '/person',
                name: 'person',
                icon: 'UserOutlined',
                component: './Person',
              },
              {
                path: '/news',
                name: 'news',
                icon: 'smile',
                component: './News',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },

              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
