import { Typography } from "@mui/material"
import { Hamburger } from "./style"
import { useContext } from "react"
import { Context } from "../../../context"

export const Menu: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    return (
        <Hamburger
            onClick={() => setOpenMenu(!openMenu)}
        >
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
        </Hamburger>
    )
}