import Header from '../components/Header/Header';
import SectionHome from '../components/SectionHome/SectionHome';
import SectionExames from '../components/SectionExames/SectionExames';
import SectionInfo from '../components/SectionInfo/SectionInfo';
import SectionSobre from '../components/SectionSobre/SectionSobre';
import SectionContato from '../components/SectionContato/SectionContato';
import SectionParceria from '../components/SectionParceria/SectionParceria';
import Footer from '../components/Footer/Footer';

function Inicio () {
    return (
        <>
        <Header />
        <SectionHome />
        <SectionExames />
        <SectionInfo />
        <SectionSobre />
        <SectionContato />
        <SectionParceria />
        <Footer />
        </>
    )
}

export default Inicio