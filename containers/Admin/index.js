import { useEffect } from 'react'

import { useRouter } from 'next/router'

const Admin = () => {
  const router = useRouter()

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'))
    if (admin.login !== 'admin' || admin.password !== 'admin123') {
      router.push('/admin/login')
    }
  })

  return <div>Admin Page</div>
}

export default Admin
