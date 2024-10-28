import { Box } from "@mui/material";
import { Style } from "@mui/icons-material";

const WidgetWrapper = styled(Box)(({theme}) => ({
    padding: '1.5rem 1.5rem 1.5rem',
    backgroundColor:theme.pelette.background.alt,
    borderRadius: '0.75rem'
}));

export default WidgetWrapper