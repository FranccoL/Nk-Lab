import "./SectionInfo.css";

function SectionInfo() {
  return (
    <div className="sectionInfo">
        <div className="containerInfo d-flex jc-space-between">
            <div className="backSmall"></div>
            
            <div className="backgrLinear d-flex  jc-center flex-column">
            <img src="/diagnosttic.svg" alt="" className="imgVet"/>
            <h1>Resultados rápidos e precisos, conte com a experiência de quem realmente entende.</h1>
                <img src="/iconsInfo.svg" alt="" className="imgIcons"/>
                
                
            </div>
        </div>
    </div>
   
  );
}

export default SectionInfo;
