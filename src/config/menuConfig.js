const menuList = [
    {
      title: '首页', // 菜单标题名称
      key: '/home', // 对应的path
      icon: 'home', // 图标名称
      isPublic: true, // 公开的
    },
    {
      title: '检索',
      key: '/function',
      //icon: 'appstore',
      children: [ // 子菜单列表
        {
          title: '档案检索',
          key: '/search',
          //icon: 'bars'
        },
        {
          title: '档案关系可视化',
          key: '/relation',
          //icon: 'tool'
        },
      ]
    },
  
    {
      title: '问答系统',
      key: '/qa',
      //icon: 'user'
    },

  ]
  
  export default menuList