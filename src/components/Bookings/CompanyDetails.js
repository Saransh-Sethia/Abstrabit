import Bajaj from '../../assets/Bajaj.png';
import BajajIcon from '../../assets/Bajaj-Icon.png';
import Utkarsh from '../../assets/Utkarsh.png';
import UtkarshIcon from '../../assets/Utkarsh-Icon.png';
import Shriram from '../../assets/Shriram.png';
import ShriramIcon from '../../assets/Shriram-Icon.png';
import Mahindra from '../../assets/Mahindra.png';
import MahindraIcon from '../../assets/Mahindra-Icon.png';
const companies = [
    {
        logo: <Utkarsh />,
        title: "Utkarsh Small Finance Bank",
        backgroundColor: "#bbe3f0",
        chipIcon: <UtkarshIcon />,
        chip1 : "Highest Interest Rate",
        chip2: "RBI Assured",
        chipColor: "#8bbdcc",
        rate: 9.10,
        button : "Book Now",
        buttonBackgroundColor: "#520B8D"
    },
    {
        logo: <Bajaj />,
        title: "Bajaj Finserv",
        backgroundColor: "#EFF6FF",
        chipIcon: <BajajIcon />,
        chip1 : "Crisil AAA Rated",
        chip2: "No Video KYC required",
        chipColor: "#0072BB",
        rate: 8.80,
        button : "Book Now",
        buttonBackgroundColor: "#0072BB"
    },
    {
        logo: <Shriram />,
        title: "Shriram Finserv",
        backgroundColor: "#F4F4F4",
        chipIcon: <ShriramIcon />,
        chip1 : "Crisil AAA Rated",
        chip2: "No Video KYC required",
        chipColor: "#dbd9d9",
        rate: 8.80,
        button : "Book Now",
        buttonBackgroundColor: "#010101"
    },
    {
        logo: <Mahindra />,
        title: "Mahindra Finance",
        backgroundColor: "#FFEFEF",
        chipIcon: <MahindraIcon />,
        chip1 : "Crisil AAA Rated",
        chip2: "No Video KYC required",
        chipColor: "#ffc2c2",
        rate: 8.80,
        button : "Book Now",
        buttonBackgroundColor: "#FF0000"
    },
];

export default companies;
