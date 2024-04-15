import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { HashLink } from 'react-router-hash-link';
import { Menu } from "../buttons/menu";
import { Context } from "../../context";

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };
    return (
        <Nav
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"var(--flexGap)"}
            padding={"var(--sectionMargin) var(--pagePadding)"}
        >
            <Logo
                className="logo"
                onClick={handleLogoClick}
            />
            <nav>
                {navLinks.map((link, k) => {
                    return (
                        <HashLink
                            key={k}
                            to={link.url}
                            smooth={true}
                            onClick={() => setOpenMenu(false)}
                        >
                            <Typography
                                className={`${link.name}`}
                                variant="subtitle1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={18}
                                lineHeight={"normal"}
                                color={"#000000"}
                                textTransform={"capitalize"}
                                padding={{ mobile: "calc(var(--cardPadding)/4) var(--cardPadding)", tablet: "calc(var(--cardPadding)/4) calc(var(--cardPadding)/2)", laptop: "calc(var(--cardPadding)/4) var(--cardPadding)" }}
                                sx={{
                                    width: "fit-content",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    "&:hover": {
                                        backgroundColor: "#D5F653",
                                        borderRadius: "27px"
                                    },
                                }}
                            >
                                {link.name}
                            </Typography>
                        </HashLink>
                    )
                })}
            </nav>
            <Menu />
        </Nav >
    )
}