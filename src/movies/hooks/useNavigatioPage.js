import { useNavigate } from "react-router-dom";

export const useNavigatioPage = (route) => {
    const navigate = useNavigate();
    const onNavigatePage = () => {
      navigate(route);
    };
    return{
        onNavigatePage
    }
}