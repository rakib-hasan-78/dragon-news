
import { useMatches } from "react-router";


const useLayoutConfig =() => {

    const matches = useMatches();

    // applying for entire section located on root

    const isEnabled = (key)=> 
        matches.every(match=>match?.handle?.[key]!== false);
    
    // for any specific contents to handle

    const getConfig = (key) => 
        [...matches].reverse()
        ?.find(match=>match?.handle?.[key]!== undefined)
        ?.handle?.[key] ?? true;

    // applying for right & left side bars 
    
    const leftSideBar = isEnabled("leftSideBar");
    const rightSideBar = isEnabled("rightSideBar");
    const footerHandle = isEnabled("footerHandle");

    // applying for specific contents 

    const promotionBG = getConfig("promotionBG");
    const headerContent = getConfig('headerContent');
    const navContent = getConfig('navContent');
    

    

    return {
        leftSideBar,
        rightSideBar,
        promotionBG,
        footerHandle,
        getConfig,
        headerContent,
        navContent
    }

}
export default useLayoutConfig;






