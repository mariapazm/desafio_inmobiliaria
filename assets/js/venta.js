const contenedor = document.getElementById('contenedor');
const listaVentas = [ 
    { nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false },

   { nombre: 'Apartamento acogedor en la montaña',
     src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
     descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
     ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
     habitaciones: 2,
     costo: 1200,
     smoke: true,
     pets: true },

   { nombre: 'Penthouse de lujo con terraza panorámica',
     src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
     descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
     ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
     habitaciones: 2,
     costo: 4500,
     smoke: false,
     pets: true },
    
     { nombre: 'Habitación moderna de estilo industrial',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-847785367524007025/original/12ef28ff-1401-4f42-9b0b-c7de355b4bc8.jpeg?im_w=320',
      descripcion: 'Moderno estudio urbano/suburbano. Exterior suburbano y vecindario con interior urbano.',
      ubicacion: '468 University City, Misuri, CA 93416',
      habitaciones: 3,
      costo: 3500,
      smoke: true,
      pets: true },
      
    { nombre: 'Condominio Natures Nest',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-986290102730216512/original/6359fe8a-402d-40a3-b7d4-0ae7a4992e68.jpeg?im_w=320',
      descripcion: 'Vida rural tranquila y privada que está a solo unos minutos del parque industrial más grande de Oklahoma',
      ubicacion: '167 Pryor, Oklahoma, CA 46779',
      habitaciones: 4,
      costo: 4800,
      smoke: false,
      pets: true },

    { nombre: 'cabaña en Eureka Springs',
      src: 'https://a0.muscache.com/im/pictures/706475d5-0ec1-47cf-ade5-4a705ab0677b.jpg?im_w=1200',
      descripcion: 'Cabaña delantera de vidrio con impresionantes vistas al lago',
      ubicacion: '167 Eureka Springs, Arkansas, CA 15998',
      habitaciones: 1,
      costo: 1800,
      smoke: false,
      pets: false}
    ];
    
    function mostrarVentas() {
      for(let venta of listaVentas){
        contenedor.innerHTML += `<div><h5>${venta.nombre}</h5>
        <p><img src="${venta.src}"/></p>
        <p>${venta.descripcion}</p><p>Ubicación:  ${venta.ubicacion}</p>
        <p>Habitaciones: ${venta.habitaciones}</p>
        <p>Costo: ${venta.costo}</p>
        <p>${venta.smoke === true ? "PERMITIDO FUMAR" : "PROHIBIDO FUMAR"}</p>
        <p>${venta.pets === true ? "MASCOTAS ADMITIDAS" : "MASCOTAS PROHIBIDAS"}</p>
        </div>`
      }
    }
    mostrarVentas();
    