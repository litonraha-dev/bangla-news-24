import Image from 'next/image';


const Header = () => {
    return (
        <div>
            <div><Image src='/logo.webp' height={30} width={30} alt='logo image'></Image></div>
            <h1>THis is news</h1>
        </div>
    );
};

export default Header;