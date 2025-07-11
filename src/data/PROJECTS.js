import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.jpeg'
import project3 from '../assets/project-3.jpg'
import project3Extra1 from '../assets/project-3-extra1.avif'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'
import project7 from '../assets/project-7.avif'
import project8 from '../assets/project-8.png'
import project9 from '../assets/project-9.png'
import project1Extra1 from '../assets/project-1-extra1.avif'
import project1Extra2 from '../assets/project-1-extra2.avif'
import project5Extra1 from '../assets/project-5-extra1.avif'
import project5Extra2 from '../assets/project-5-extra2.avif'
import project5Extra3 from '../assets/project-5-extra3.avif'

export const PROJECTS = [
  {
    id: 1,
    date: 2024,
    title: 'Editorial',
    img: project1,
    slug: 'project-1',
    description:
      'Las portadas que se presentan han sido diseñadas para Éxito Vida y Ediciones Shesat. En Éxito Vida, mi proyecto personal, continúo desempeñando un rol clave en la creación de portadas y en la maquetación integral de todos los ejemplares. Además de desarrollar las portadas, soy responsable de la maquetación completa de cada publicación, tanto en formato digital como impreso. Mi enfoque se centra en garantizar una presentación visual coherente y profesional, cuidando cada detalle del diseño y la estructura para ofrecer una experiencia de lectura óptima y consistente en todas las obras.',
    projectPage: {
      img: [project1Extra1, project1Extra2]
    }
  },
  {
    id: 2,
    date: 2024,
    title: 'Empty Magazine',
    img: project2,
    slug: 'project-2',
    description:
      'Empty Magazine fue una revista única dedicada a mostrar el talento de diseñadores y artistas emergentes. En su única edición, se presentó una selección exclusiva de ilustraciones personalizadas que destacaron por su creatividad y originalidad. Con un enfoque en la innovación y la frescura, Empty Magazine ofreció una plataforma para que nuevos artistas compartieran su visión y expresaran su estilo de una manera única.',
    projectPage: {}
  },
  {
    id: 3,
    date: 2024,
    title: 'White Paper By',
    img: project3,
    slug: 'project-3',
    description:
      'En White Paper By, trabajo en la maquetación de los artículos que conforman la parte final de la revista, tanto en su versión impresa como digital. Mi labor consiste en dar forma a los contenidos, asegurando que tanto el diseño como la estructura sean coherentes y atractivos para los lectores. Además, me encargo de maquetar los artículos en dos idiomas, español e inglés, garantizando una presentación profesional y accesible para una audiencia internacional.',
    projectPage: {
      img: project3Extra1
    }
  },
  {
    id: 4,
    date: 2024,
    title: 'CD Empty',
    img: project4,
    slug: 'project-4',
    description:
      'El proyecto consistió en el diseño de una colección de tres portadas para CD, donde fusioné elementos futuristas con mi estilo personal, alineado con la estética de Empty Magazine. Cada portada fue pensada para reflejar una visión vanguardista, manteniendo una identidad coherente y distintiva que caracteriza mi marca personal. El diseño busca transmitir una sensación de innovación y modernidad, mientras se conserva la esencia visual de Empty, una estética limpia y minimalista, pero con toques de complejidad que invitan a la reflexión. Este trabajo no solo representa una exploración creativa, sino también un esfuerzo por llevar la identidad visual de Empty a un nuevo formato, donde cada portada, aunque independiente, se complementa y forma parte de una misma narrativa visual futurista.',
    projectPage: {}
  },
  {
    id: 5,
    date: 2024,
    title: 'Branding Logo',
    img: project5,
    slug: 'project-5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tortor imperdiet, vulputate lorem eu, venenatis est. Nulla faucibus rutrum magna et scelerisque. Donec eu aliquet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at scelerisque justo. Vivamus dignissim, odio sed luctus tristique, tortor lectus vulputate lorem, eu dapibus nunc enim ac augue. Fusce ornare rhoncus elit sit amet vehicula. Donec accumsan libero ut aliquet hendrerit. Nunc id varius mi. Sed quam elit, placerat ut metus nec, consectetur condimentum enim. Pellentesque et dui massa. Integer porttitor quam sit amet libero suscipit, a pretium est consequat. Donec laoreet, ipsum id posuere lacinia, felis justo ultrices libero, eu auctor eros neque et lorem. Cras tempor dictum mollis. Phasellus laoreet efficitur faucibus. Praesent feugiat suscipit lorem, vel fringilla quam.',
    projectPage: {
      img: [project5Extra1, project5Extra2, project5Extra3, project5]
    }
  },
  {
    id: 6,
    date: 2024,
    title: 'Olivar de Castro',
    img: project6,
    slug: 'project-6',
    description:
      'El proyecto de branding y packaging para Eira Fondos se centró en reflejar la calidad premium y los valores de la marca: autenticidad, tradición y frescura. El logotipo fue diseñado con líneas limpias y elementos gráficos relacionados con el olivo, garantizando su versatilidad en diferentes formatos. La identidad visual utiliza una paleta de colores naturales, con colores negros y dorados, y tipografía moderna que equilibra tradición y vanguardia. El diseño de packaging emplea materiales de alta calidad, acabados mate y detalles en relieve para una presentación sofisticada. Además, se apostó por la sostenibilidad con materiales reciclables. Se creó también un catálogo de productos que destaca la esencia artesanal de la marca y unos materiales de papelería coherentes y elegantes. Cada elemento, desde las tarjetas de visitahasta las cajas, refleja la identidad sólida y profesional de Eira Foods.',
    projectPage: {}
  },
  {
    id: 7,
    date: 2024,
    title: 'Interior Design',
    img: project7,
    slug: 'project-7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tortor imperdiet, vulputate lorem eu, venenatis est. Nulla faucibus rutrum magna et scelerisque. Donec eu aliquet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at scelerisque justo. Vivamus dignissim, odio sed luctus tristique, tortor lectus vulputate lorem, eu dapibus nunc enim ac augue. Fusce ornare rhoncus elit sit amet vehicula. Donec accumsan libero ut aliquet hendrerit. Nunc id varius mi. Sed quam elit, placerat ut metus nec, consectetur condimentum enim. Pellentesque et dui massa. Integer porttitor quam sit amet libero suscipit, a pretium est consequat. Donec laoreet, ipsum id posuere lacinia, felis justo ultrices libero, eu auctor eros neque et lorem. Cras tempor dictum mollis. Phasellus laoreet efficitur faucibus. Praesent feugiat suscipit lorem, vel fringilla quam.',
    projectPage: {}
  },
  {
    id: 8,
    date: 2024,
    title: 'Mothions Graphics 3D - Exposición Escultura Griega',
    img: project8,
    slug: 'project-8',
    description:
      'Una experiencia inmersiva en la escultura griega, te llevará a través de los hitos más significativos de la historia de la escultura clásica, presentando algunas de sus piezas más icónicas. A través de impresionantes gráficos y animaciones, exploraremos la técnica, la influencia y la evolución de estas obras maestras, destacando su impacto en la cultura y el arte a lo largo de los siglos. Este video también sirve como la presentación oficial y anuncio de la nueva exposición en el Museo del Prado, donde los visitantes podrán apreciar de cerca estas esculturas que han perdurado a lo largo de la historia. Una experiencia visual única que fusiona el arte clásico con la tecnología moderna, llevando al espectador a un viaje fascinante hacia la Grecia antigua.',
    projectPage: {
      iframeURL:
        'https://www.youtube.com/watch?v=IbiH2cuBnqU&list=TLGGt0z4ziy7eS0yNTA2MjAyNQ&t=2s&ab_channel=EstefaniaDelgadoCastro'
    }
  },
  {
    id: 9,
    date: 2024,
    title: 'Faces Undercover',
    img: project9,
    slug: 'project-9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tortor imperdiet, vulputate lorem eu, venenatis est. Nulla faucibus rutrum magna et scelerisque. Donec eu aliquet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at scelerisque justo. Vivamus dignissim, odio sed luctus tristique, tortor lectus vulputate lorem, eu dapibus nunc enim ac augue. Fusce ornare rhoncus elit sit amet vehicula. Donec accumsan libero ut aliquet hendrerit. Nunc id varius mi. Sed quam elit, placerat ut metus nec, consectetur condimentum enim. Pellentesque et dui massa. Integer porttitor quam sit amet libero suscipit, a pretium est consequat. Donec laoreet, ipsum id posuere lacinia, felis justo ultrices libero, eu auctor eros neque et lorem. Cras tempor dictum mollis. Phasellus laoreet efficitur faucibus. Praesent feugiat suscipit lorem, vel fringilla quam.',
    projectPage: {}
  }
]
