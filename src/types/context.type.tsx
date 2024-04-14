export type ContextProviderPropsType = {
    children: React.ReactNode
}

export type ContextType = {
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}