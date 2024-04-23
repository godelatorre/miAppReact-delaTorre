const productos = [
    {
        id:'1',
        name:'Amnesia Haze Auto',
        stock:300,
        price: 20 ,
        description:'Es una cepa de cannabis que cautiva con su perfil genético dominante Sativa, representando el 70% de su composición. Originaria de las regiones tropicales, esta cepa ha sido cuidadosamente desarrollada para ofrecer una experiencia de consumo única y satisfactoria. Con un aroma cítrico y terroso, acompañado de matices picantes y herbáceos, cada bocanada de Amnesia Haze Auto despierta los sentidos y transporta al consumidor a un estado de euforia y creatividad',
        image:'../img/amnesia-haze.jpg',
        category:'Automaticas'
    },
    {
        id:'2',
        name:'Kix Lemon',
        stock:4,
        price:20,
        description:'Es una variedad de cannabis con un perfil genético predominantemente Sativa, representando el 60% de su composición. Reconocida por su distintivo aroma a limón y su sabor cítrico, esta cepa ofrece una experiencia sensorial refrescante y estimulante. Conocida por sus efectos energizantes y eufóricos, Kix Lemon es ideal para aquellos que buscan un impulso de creatividad y enfoque durante el día',
        image:'../img/lemon-kix.jpg',
        category:'Automaticas'
    },
    {
        id:'3',
        name:'California Orange',
        stock:800,
        price: 25,
        description:'La variedad "California Orange" es un híbrido equilibrado de cannabis, con un perfil genético compuesto por un 50% de Sativa y un 50% de Indica. Reconocida por su característico aroma a naranja y su sabor dulce y cítrico, esta cepa ofrece una experiencia sensorial única y placentera.La California Orange es una elección popular entre los cultivadores por su resistencia y su generoso rendimiento',
        image:'../img/california-orange.jpg',
        category:'Fotoperiodicas'
    },
    {
        id:'4',
        name:'Frisian Duck ',
        stock:200,
        price:30,
        description:'Es un híbrido de cannabis con un perfil genético que consiste en un 80% de Sativa y un 20% de Indica. Reconocida por su singular apariencia y su robustez, esta variedad es apreciada tanto por su potencia como por su facilidad de cultivo.Esta cepa es una excelente opción para aquellos que buscan inspiración y claridad mental, así como para quienes desean aliviar el dolor y la tensión muscular de manera suave y efectiva. Su adaptabilidad y resistencia la convierten en una opción atractiva tanto para cultivadores novatos como experimentados.',
        image:'../img/frisian-duck.jpg',
        category:'Fotoperiodicas'
    },
    {
        id:'5',
        name:'Victory THC - Auto',
        stock:600,
        price: 32,
        description:'Es una variedad de cannabis autofloreciente, con un marcado predominio Sativa que abarca el 80% de su composición genética. Reconocida por su potente contenido de THC.La "Victory THC - Auto" encapsula la combinación perfecta de potencia, practicidad y versatilidad, lo que la convierte en una opción deseable tanto para usuarios recreativos como para aquellos que buscan beneficios terapéuticos.',
        image:'../img/victory.jpg',
        category:'Medicinal'
    },
    {
        id:'6',
        name:'Red Pure',
        stock:800,
        price: 35,
        description:'Es una variedad de cannabis, con un marcado predominio Indica que abarca el 70% de su composición genética, lo que sta ofrece una experiencia relajante y sedante, ideal para momentos de calma y tranquilidad. Es apreciada por sus efectos físicos profundamente relajantes, que pueden aliviar el estrés, la tensión muscular y promover el sueño reparador. Además de sus propiedades terapéuticas, esta cepa es valorada por su facilidad de cultivo y su rápido ciclo de vida. Esto la convierte en una opción atractiva para cultivadores de todos los niveles de experiencia, así como para aquellos que buscan una cosecha abundante y de alta calidad en poco tiempo.',
        image:'../img/red-pure.jpg',
        category:'Medicinal'
    }
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, inténtelo más tarde');
            } else {
                resolve(productos);
            }
        }, 1500);
    });
};

export const getOneProduct = (productId) => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, inténtelo más tarde');
            } else {
                const product = productos.find(item => item.id === productId);
                if (product) {
                    resolve(product);
                } else {
                    reject('No se encontró el producto con el ID proporcionado');
                }
            }
        }, 1500);
    });
};
