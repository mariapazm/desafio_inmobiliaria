const contenedor = document.getElementById('contenedor');
const listaArriendos = [ 
  { nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2.000,
    smoke: false,
    pets: true },

  { nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Lake Street, Anytown, CA 91456',
    habitaciones: 2,
    costo: 2.300,
    smoke: false,
    pets: false},

  { nombre: 'Pieza en hotel',
    src: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-562905882915104658/original/13345928-e406-41da-a1e7-cc13aa4d3d91.jpeg?im_w=320',
    descripcion: 'El hotel con capacidad para inquilinos a largo plazo y personas mayores',
    ubicacion: 'es 9869 United Dr, Houston, TX 77036',
    habitaciones: 1,
    costo: 1.500,
    smoke: false,
    pets: false },
    
    
    { nombre: 'Hacienda Heights Beauty',
      src: 'https://a0.muscache.com/im/pictures/9c01d372-9234-4d78-baf2-c2733e350aa2.jpg?im_w=1200',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '868 Hacienda Heights, California, CA 19779',
      habitaciones: 2,
      costo: 3.000,
      smoke: false,
      pets: false },
      
    { nombre: 'Condominio Natures Nest',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-986290102730216512/original/6359fe8a-402d-40a3-b7d4-0ae7a4992e68.jpeg?im_w=320',
      descripcion: 'Vida rural tranquila y privada que está a solo unos minutos del parque industrial más grande de Oklahoma',
      ubicacion: '167 Pryor, Oklahoma, CA 46779',
      habitaciones: 4,
      costo: 4800,
      smoke: false,
      pets: true },

    { nombre: 'Casa del árbol en Trenton',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-31202365/original/087f3a0c-12cf-4c16-80f1-c42ee6790557.jpeg?im_w=1440',
      descripcion: 'Cabaña delantera de vidrio con impresionantes vistas al lago',
      ubicacion: '167 Eureka Springs, Arkansas, CA 15998',
      habitaciones: 1,
      costo: 1800,
      smoke: false,
      pets: false},

    { nombre: 'Glamping. Cama tamaño king y jacuzzi.',
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1250879137526518634/original/7cba0fb8-e560-4f91-905a-5ab10e6dae79.jpeg?im_w=1440',
      descripcion: '¡Relájese, quédese en una zona asequible y tranquila y explore el sur de California! Cerca de muchas atracciones.',
      ubicacion: '67 Salt Lake City, Utah, CA 36784',
      habitaciones: 1,
      costo: 1.000,
      smoke: false,
      pets: true }    
    ];
    
    function mostrarArriendos() {
      for(let arriendo of listaArriendos){
        contenedor.innerHTML += `<div><h5>${arriendo.nombre}</h5>
        <p><img src="${arriendo.src}"/></p>
        <p>${arriendo.descripcion}</p><p>Ubicación:  ${arriendo.ubicacion}</p>
        <p>Habitaciones: ${arriendo.habitaciones}</p>
        <p>Costo: ${arriendo.costo}</p>
        <p>${arriendo.smoke === true ? "PERMITIDO FUMAR" : "PROHIBIDO FUMAR"}</p>
        <p>${arriendo.pets === true ? "MASCOTAS ADMITIDAS" : "MASCOTAS PROHIBIDAS"}</p>
        </div>`
      }
    }
    mostrarArriendos();

