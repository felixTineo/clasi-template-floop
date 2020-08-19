import { v1 as uuid } from 'uuid';
export default {
  edit:{
    visible: false,
    type: "",
    title: "",
  },
  color: false,
  office: {
    id: "5e8e36b31c9d440000d35090",
    name: "ClasiHome",
    email: "clasi@clasihome.cl",
    address: "Hola",
    phone: {
      countryCode: "5555",
      areaCode: "555",
      phoneNumber: "55555555"
    },
    mobile: {
      countryCode: "5555",
      areaCode: "555",
      phoneNumber: "55555555"
    },      
  },
  main:{
    primaryColor: "#FFA600",
    secondaryColor: "#ffffff",
    favicon: "",
    logo:{
      isImage: true,
      value: "/logo.png",
    },
  },
  home:{
    hero:{
      visible: true,
      title: "Somos lo mejor en el mercado inmobiliario",
      background: "/hero.jpg",
    },
    properties:{
      visible: true,
      title: "Contamos con una seleción exclusiva de propiedades.",
      footer: "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
      buttonText: "Ver todas las propiedades",
      items:[
        {
          id: uuid(),
          mainImage: '/property-1.png',
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Valle del Monasterio / manquele oriente",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 4
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-2.png',
          title: "Casa en Vitcura",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Lo Curro",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 8
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-3.png',
          title: "Casa en Las Condes",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Malaga",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-4.png',
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Rosario / Casorra Alzamona",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        }, 
        {
          id: uuid(),
          mainImage: '/property-1.png',
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Valle del Monasterio / manquele oriente",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 4
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-2.png',
          title: "Casa en Vitcura",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Lo Curro",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 8
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-3.png',
          title: "Casa en Las Condes",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Malaga",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          id: uuid(),
          mainImage: '/property-4.png',
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Rosario / Casorra Alzamona",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },                                              
      ],
    },
    about:{
      banner:{
        visible: true,
        image: '/service.jpg',
        title: "Somos una empresa con mas de 20 años en el rubro del corretaje inmobiliario",
        subTitle: "Esto nos permite entender mejor que nadie las necesidades de nuestros clientes, por eso ponemos el foco en que la experienca de compra o arriendo sea única",
        buttonText: "Conocénos",
      },
    },
    services:{
      visible: true,
      items:[
        {
          id: uuid(),
          title: 'Compras',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Ventas',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Arriendo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                
        {
          id: uuid(),
          title: 'Compras',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Ventas',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Arriendo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                   
      ]      
    },
    reviews:{
      visible: true,
      items:[
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Adrian Carcamo - Clasihome'
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Elon musk - Space-x'
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Montgomery burns - Planta nuclear de springfield'
        },     
      ],
    },
    contact:{
      visible: true,
      title: "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.",
      buttonText: "contacto"
    },    
  },
  about:{
    hero:{
      visible: true,
      title: "Un equipo de profesionales especializado en el sector inmobiliario.",
      background: '/about-background.jpg',
    },
    history:{
      visible: true,
      title: "Nuestra Historia",
      description: "<p>Somos Floop, una empresa con varios años de trayectoria en el dinámico mercado inmobiliario, reconocidos por un servicio altamente personalizado y eficiente.</p><p>Nuestra gran fortaleza es el profundo conocimiento comercial inmobiliario que nos permite agregar valor a todos los proyectos que emprendemos y servicios que entregamos.<p/>"
    },
    description:{
      visible: true,
      background: "/about-description.jpg",
      items:[
        {
        title: "Misión",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },
        {
        title: "Visión",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },
        {
        title: "Valores",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },       
        {
        title: "Misión",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },
        {
        title: "Visión",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },
        {
        title: "Valores",
        description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
        },                        
      ]
    },
    stats:{
      visible: true,
      items:{
        years:{
          value: 50,
          meta: "Años en el mercado",
        },
        transactions:{
          value: 500,
          meta: "Ventas y arriendos anuales",
        },
        properties:{
          value: 1000,
          meta: "Propiedades en administración",
        },
        proffesionals:{
          value: 70,
          meta: "Profesionales",
        },                                
      }
    },
    team:{
      visible: true,
      members:[
        {
          id: uuid(),
          firstName: "Adrian",
          lastName: "Carcamo",
          description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
          avatar: "/team-member-1.jpg",
          email:"acarcamo@clasihome.cl",
          phone: "+56 9 5555 5555"
        },
        {
          id: uuid(),
          firstName: "Roberto",
          lastName: "Gajardo",
          description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
          avatar: "/team-member-2.jpg",
          email:"rgajardo@clasihome.cl",
          phone: "+56 9 5555 5555"
        },
        {
          id: uuid(),
          firstName: "Juan",
          lastName: "Llopis",
          description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
          avatar: "/team-member-3.jpg",
          email:"jllopis@clasihome.cl",
          phone: "+56 9 5555 5555"
        },
        {
          id: uuid(),
          firstName: "Romulo",
          lastName: "Ricondo",
          description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades.  ",
          avatar: "/team-member-4.jpg",
          email:"rricondo@clasihome.cl",
          phone: "+56 9 5555 5555"
        },                        
      ]
    },
    ubication:{
      visible: true,
      title: "Encuentrenos en Sucursal Chicureo Camino a Chicureo 2 km. esquina Los Ingleses Colina - Santiago",
      location:{
        coordinates:["0", "0"],
      }
    }
  },
  singleProperty:{
    
  }
}