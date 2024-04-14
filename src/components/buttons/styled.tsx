import { Button, styled } from "@mui/material";
import { BaseButtonProps } from "../../types/app.type";

const getColorStyles = (location: string) => {
    switch (location) {
        case "header":
            return {
                color: "#FFFFFF",
                bg: "#075142",
            }
        case "ready":
            return {
                color: "#111111",
                bg: "#D5F653"
            }
        case "footer":
            return {
                color: "#075142",
                bg: "#D5F653"
            }
        default:
            return {
                color: "#FFFFFF",
                bg: "#075142",
            }
    }
}

export const BaseButton = styled(Button)<BaseButtonProps>(
    ({ theme, location }) => {
        return {
            fontFamily: "PP Telegraph",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "normal",
            textTransform: "capitalize",
            color: getColorStyles(location).color,
            background: getColorStyles(location).bg,
            borderRadius: 27,
            padding: "0.5rem 1rem",
            ":hover": {
                background: getColorStyles(location).bg,
            },
        };
    }
);