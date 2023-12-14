export const equipo = [
	{
		name: "Flashes Profoto D1 Air 500W",
		price: 1200,
		description: "Flashes Profoto D1 Air 500W con 2x Softbox Profoto 3x4",
		category: "Flashes",
		image:
			"https://cdn.shopify.com/s/files/1/0565/8057/1308/products/ProfotoD1Air500DuoLightKit.jpg?v=1629503388&width=533",
		available: true,
		quantity: 3,
		stock: 3,
	},
	{
		name: "Flashes Profoto D1 Air 1000W",
		price: 1500,
		description: "Flashes Profoto D1 Air 1000W con 2x Softbox Profoto 3x4",
		category: "Flashes",
		image:
			"https://www.fotomecanica.mx/media/catalog/product/cache/243b585d5b053344651ac1ff3b7a4649/p/r/profoto_901025_d1_air_1000_w_s_1547571062_605742.jpg",
		available: false,
		quantity: 1,
		stock: 1,
	},
	{
		name: "Aputure c300d II",
		price: 1000,
		description: "Aputure c300d II con tripie",
		category: "Illuminacion",
		image:
			"https://www.fotomecanica.mx/media/catalog/product/cache/243b585d5b053344651ac1ff3b7a4649/a/p/aputure_lsc300diivkit_light_storm_c300d_mark_1560940549_1483694.jpg",
		available: true,
		quantity: 1,
		stock: 3,
	},
	{
		name: "Aputure c120d II",
		price: 800,
		description: "Aputure c120d II con tripie",
		category: "Illuminacion",
		image:
			"https://m.media-amazon.com/images/I/41evjuAxgBL._AC_UF1000,1000_QL80_.jpg",
		available: true,
		quantity: 1,
		stock: 1,
	},
	{
		name: "Boom Manfrotto",
		price: 300,
		description: "Boom Manfrotto para carcar luces",
		category: "accesorios",
		image:
			"https://http2.mlstatic.com/D_NQ_NP_882903-MLM31238363379_062019-O.webp",
		available: true,
		quantity: 1,
		stock: 1,
	},
	{
		name: "Cicloramas de color",
		price: 300,
		description: "Cicloramas de color 2x2",
		category: "accesorios",
		image:
			"https://scontent.fgdl13-1.fna.fbcdn.net/v/t39.30808-6/284093659_5110753619003495_4335713186427184220_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GUOafBRuAEwAX_s3rTH&_nc_ht=scontent.fgdl13-1.fna&oh=00_AfBQ35MPAR8azF5o_1xWot87MtLwGZ9q_EJLILBdWXCsHQ&oe=648D193F",
		available: true,
		quantity: 1,
		stock: 8,
	},
];

// Foro Space
const foroSpace = {
	name: "Ciclorama Infinito",
	description:
		"Descubre el espacio perfecto para tus producciones visuales en nuestro Foro con Ciclorama Infinito. Con una impresionante altura de 3.3 metros y un ciclorama blanco infinito, este espacio te ofrece la versatilidad y comodidad que necesitas para tu siguiente sesión.",
	category: "Espacios",
	image:
		"https://res.cloudinary.com/duzeqpmgg/image/upload/v1689393832/Central/Foro-1_f251pg.jpg",
	details: {
		area: "4.4 x 8.15 m",
		altura: "3.3 m",
		tiro: "14 m",
		aireAcondicionado: true,
		incluye: {
			flashes: "2 Flashes Godox SK40011-V + Accesorios",
			ciclorama: ["Infinito Blanco", "Blanco", "Negro"],
			opcional: "Cicloramas de otros colores $400 + IVA por color",
		},
	},
	hours: {
		dias: ["Lun-Vier", "Sab-Dom"],
		horas: {
			LunViern: { 3: 1700, 5: 2250, 10: 3900 },
			SabDomingo: { 3: 2600, 5: 3250, 10: 4980 },
		},
		extra: 550,
	},
};

// Estudio Space
const estudioSpace = {
	name: "Estudio",
	description:
		"¡Bienvenido a nuestro Estudio! Un espacio amplio con dimensiones de 5.4 x 4.5 metros, altura de 3.3 metros y equipado con todo lo necesario, incluyendo flashes profesionales. Ideal para sesiones de fotos y producciones audiovisuales. ¡Rentálo y crea obras increíbles con nosotros!",
	category: "Espacios",
	image:
		"https://res.cloudinary.com/duzeqpmgg/image/upload/v1689394006/Central/Estudio-1_ky3icl.png",
	details: {
		area: "5.4 x 4.5 M",
		altura: "3.3 M",
		tiro: "5.4m",
		aireAcondicionado: true,
		incluye: {
			flashes: "2 Flashes Godox SK40011-V + Accesorios",
			ciclorama: ["Blanco", "Negro"],
			opcional: "Cicloramas de otros colores $400 + IVA por color",
		},
	},
	hours: {
		dias: ["Lun-Vie", "Sab-Dom"],
		horas: {
			LunViern: { 3: 1300, 5: 1900, 10: 2800 },
			SabDomingo: { 3: 1900, 5: 2700, 10: 3700 },
		},
		extra: 450,
	},
};

// Cocina Space
const cocinaSpace = {
	name: "Cocina",
	description:
		"Tenemos una cocina industrial para tus producciones. Con 5.4 x 3.5 metros de espacio, esta cocina totalmente equipada es perfecta para sesiones gastronómicas, catering y mas. ¡Disponible solo para rentar en conjunto con el ciclorama infinito o Estudio!",
	category: "Espacios",
	image:
		"https://res.cloudinary.com/duzeqpmgg/image/upload/v1689394006/Central/Estudio-1_ky3icl.png",
	details: {
		area: "5.4 x 3.5 M",
		altura: "3.3 M",
		disponible: "Solo disponible rentando el ciclorama infinito o Estudio",
		aireAcondicionado: false,
		equipamiento: [
			"Estufa con horno",
			"Refrigerador",
			"Horno de microondas",
			"Horno eléctrico",
			"Cacerolas y ollas",
			"2 Mesas de acero inoxidable",
			"Licuadora",
			"Bowls metálicos",
		],
	},
	hours: {
		dias: ["Lun-Vie", "Sab-Dom"],
		horas: {
			LunViern: { 3: 900, 5: 1300, 10: 1950 },
			SabDomingo: { 3: 1200, 5: 1800, 10: 2500 },
		},
		extra: 300,
	},
};

// Array of Spaces
export const espacios = [foroSpace, estudioSpace, cocinaSpace];
