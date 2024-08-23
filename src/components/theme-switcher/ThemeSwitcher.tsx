'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import { Switch } from '@nextui-org/react'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(true)

  function changeTheme() {
    setIsSelected(!isSelected)
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Switch
      isSelected={theme === 'light'}
      onValueChange={changeTheme}
      defaultSelected
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  )
}