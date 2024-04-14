import { Box, BoxProps, styled } from "@mui/material";
import { HeroProps } from "../../types/app.type";

export const Hero: React.FC<BoxProps & Omit<HeroProps, keyof BoxProps>> = styled(Box)<HeroProps>(
    ({ theme, bgimage }) => {
        return {
            padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            minHeight: "43.25rem",
            [theme.breakpoints.down("tablet")]: {
                padding: "var(--sectionMargin) var(--pagePadding)",
            }
        }
    }
)