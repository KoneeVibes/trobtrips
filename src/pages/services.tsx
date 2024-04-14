import { Container } from "@mui/material";
import { Navbar } from "../components/navigation";
import { Header } from "../components/header";

export const Services: React.FC<{}> = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
                overflow: "hidden",
                "& .services": {
                    backgroundColor: "#D5F653",
                    borderRadius: "27px"
                }
            }}
        >
            <Navbar />
            <Header
                bg=""
                leadText="Sustainable adventures."
                highlightText="Minimize impact "
                subLeadText="Create memories and empower communities."
            />
        </Container>
    )
}