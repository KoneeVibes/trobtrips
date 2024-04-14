import { Typography } from "@mui/material";
import { HeaderProps } from "../../types/app.type";
import { Hero } from "./styled";
import { BaseButton } from "../buttons/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Header: React.FC<HeaderProps> = ({ leadText, highlightText, subLeadText, bg }) => {
    return (
        <Hero bgimage={bg}>
            <Typography
                variant="h1"
                fontFamily={"Inter"}
                fontWeight={700}
                fontSize={{ mobile: 35, miniTablet: 40, tablet: 55, laptop: 60, desktop: 70 }}
                lineHeight={"normal"}
                color={"#000000"}
                whiteSpace={"normal"}
                marginBlockEnd={"2rem"}
                width={{ tablet: "75%", laptop: "60%" }}
            >
                {leadText}
                <br />
                <Typography
                    component={"span"}
                    fontFamily={"inherit"}
                    fontWeight={"inherit"}
                    fontSize={"inherit"}
                    lineHeight={"inherit"}
                    color={"#075142"}
                    whiteSpace={"inherit"}
                    sx={{
                        background: "#D5F653",
                    }}
                >
                    {highlightText}
                </Typography>
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={{ mobile: 18, tablet: 24 }}
                lineHeight={"normal"}
                color={"#000000"}
                whiteSpace={"normal"}
                marginBlockEnd={"2rem"}
            >
                {subLeadText}
            </Typography>
            <BaseButton
                location="header"
                endIcon={<ArrowOutwardIcon />}
            >
                <Typography
                    variant="button"
                    fontFamily={"inherit"}
                    fontWeight={"inherit"}
                    fontSize={"inherit"}
                    lineHeight={"inherit"}
                    color={"#inherit"}
                    whiteSpace={"normal"}
                    textTransform={"inherit"}
                >
                    Get a Quote
                </Typography>
            </BaseButton>
        </Hero>
    )
}