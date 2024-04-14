import { Button, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../context";

export const Hamburger = styled(Button)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            display: "block",
            backgroundColor: "#D5F653",
            border: "none",
            borderRadius: "8px",
            "&:hover": {
                backgroundColor: "#D5F653",
            },
            "& span": {
                display: "block",
                width: "25px",
                height: "3px",
                margin: "5px auto",
                transition: "all 0.3s ease -in -out",
                background: "#000000"
            },
            "& span:nth-of-type(2)": {
                opacity: openMenu ? 0 : 1,
            },
            "& span:nth-of-type(1)": {
                transform: openMenu ? "translateY(8px) rotate(45deg)" : "unset",
            },
            "& span:nth-of-type(3)": {
                transform: openMenu ? "translateY(-8px) rotate(-45deg)" : "unset",
            },
            "& span:nth-of-type(4)": {
                opacity: 0,
            },
            [theme.breakpoints.up("tablet")]: {
                display: "none",
            },
            [theme.breakpoints.down("tablet")]: {
                flex: "56px 0 1",
                minWidth: "0 !important",
            },
            [theme.breakpoints.between("mobile", 180)]: {
                "& span": {
                    width: "auto"
                }
            },
        }
    }
)