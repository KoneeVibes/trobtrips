import { Stack, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Nav = styled(Stack)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            "& nav": {
                display: "flex",
                alignItems: "center",
                gap: "var(--flexGap)",
                "& a": {
                    textDecoration: "none",
                },
                [theme.breakpoints.down("tablet")]: {
                    position: "fixed",
                    top: "calc(52px + calc(2 * var(--sectionMargin)))",
                    left: 0,
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    gap: "calc(2 * var(--flexGap))",
                    padding: "var(--sectionMargin) var(--pagePadding)",
                    width: "stretch",
                    height: "stretch",
                    background: "#FFFFFF",
                    zIndex: 100,
                },
            },
            [theme.breakpoints.down("tablet")]: {
                "& .logo": {
                    flex: "91px 0 1",
                },
                "& a": {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                }
            },
            [theme.breakpoints.down(150)]: {
                justifyContent: "center",
                "& .logo": {
                    display: "none",
                },
            }
        }
    }
)