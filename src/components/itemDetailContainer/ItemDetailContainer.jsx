import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const [validateItem, setValidateItem]= useState(false)
    const { id } = useParams();

    
    //FIREBASE

    useEffect(() => {
        setCargando(true)
       
        const collectionProd = collection(db, "productos")
        
        const referenciaDoc = doc(collectionProd, id)
      
        getDoc(referenciaDoc)
            .then((res) => {
                if (res.data()) {
                    setProducto({ id: res.id, ...res.data() })
                }else{
                    setValidateItem (true)
                }


            })

            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
    }, [id])

    if (cargando) {
        return <h1 style={{ color: 'yellow', fontSize: '2em' }}>Cargando...</h1>
    }
    return (
        <div>
            {validateItem ? 
                <div style={{ 
                    textAlign: 'center',
                    marginBottom: '20px'
                }}>
                    <p style={{ 
                        color: 'yellow', 
                        fontSize: '1.5em',
                        textTransform: 'uppercase',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold'
                    }}>
                        ¡upps!...El producto no existe...
                    </p> 
                    <img src="/img/hojaPensativa.jpg" alt="Imagen de Producto No Existe" style={{ 
                        width: '300px', 
                        height: 'auto',
                        maxWidth: '100%',
                        display: 'block',
                        margin: '0 auto'
                    }} />
                </div>
                : 
                <ItemDetail producto={producto} />
            }
        </div>
    )
    
    
        }    
    
export default ItemDetailContainer
