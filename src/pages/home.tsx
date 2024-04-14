import { Container } from "@mui/material";
import { Navbar } from "../components/navigation";
import { Header } from "../components/header";
import headerBg from "../assets/servicesBg.svg";

export const Home: React.FC<{}> = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
                overflow: "hidden",
                "& .home": {
                    backgroundColor: "#D5F653",
                    borderRadius: "27px"
                }
            }}
        >
            <Navbar />
            <Header
                bg={headerBg}
                leadText="Unforgettable adventures."
                highlightText="Minimal footprint."
                subLeadText="Journeys that change you and empower communities."
            />
        </Container>
    )
}