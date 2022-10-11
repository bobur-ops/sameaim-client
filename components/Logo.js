// import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span``

const Logo = () => {
  const logoSameAim = '/img/logo.svg'

  return (
    <Link href="/">
      <LogoBox>
        <Image width={80} height={80} src={logoSameAim} alt="logo" />
      </LogoBox>
    </Link>
  )
}

export default Logo
