import Layout from '@/layout'

const componentsRouter = {
  name: 'ComponentDemo',
  path: "/components",
  component: Layout,
  redirect: "noRedirect",
  meta: {
    title: "Components",
    icon: "component"
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'Tinymce' }
    },
  ]
}

export default componentsRouter
