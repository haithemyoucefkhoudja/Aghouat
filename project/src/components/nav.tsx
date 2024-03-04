import Image from "next/image";
import GraphOne from '@/public/graph.png'
import GraphTwo from '@/public/graph-t.png'
import Logo from '@/public/logo.png'
export const NavBar = () => {
    return (
        <>
        <div className="BgImgs position-absolute w-100 h-100 overflow-hidden">
            <Image className="position-absolute" src={GraphTwo} alt=""/>
            <Image className="position-absolute" src={GraphOne} alt=""/>
        </div>
                        

        <header className="px-5 py-4 d-flex align-items-center justify-content-between">
            <Image className="Logo" src={Logo} width={80} height={80} alt=""/>
            <ul className="Languages s16 d-flex gap-2">
                <li className="Active pointer" >En</li>
                <li className="pointer">Fr</li>
                <li className="pointer">Ar</li>
            </ul>
        </header>
        </>  
    );
}