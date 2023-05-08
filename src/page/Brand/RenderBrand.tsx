import { NavLink } from 'react-router-dom'
import { Brand } from '../../api/BrandType';


interface BrandProps{
    Brand?:Brand[]
}
export default function RenderBrand(props:BrandProps) {
    const { Brand } = props;
    const BrandRender = () =>{
       return  Brand?.map((brand, index) => {
           return <div className="col-4" key={index}>
               <div className="image-container">
                   <img className='img-brand' src={brand.Img.toString()} alt="Your Image" />
                   <NavLink to={`/home/${brand.slug}`}>
                       <div className="curtain left" >{brand.Name}</div>
                       <div className="curtain right" ></div>
                       <div>
                       </div>
                   </NavLink>
               </div>
           </div>
       })
    }
 
  return (
    <div className='row'>{BrandRender()}</div>
  )
}

