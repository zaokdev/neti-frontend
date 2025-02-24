import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { StepBack } from "lucide-react";

const Jobs = () => {

  const [jobInView,setJobInView] = useState<any>()

  const mockData = [
    {
      id: 1,
      title: "Desarrollador Full Stack",
      company: {
        id: 101,
        name: "Tech Solutions",
        image: "https://placehold.co/400x400",
      },
      location: "Ciudad de México, México",
      contractType: "Full-time",
      salary: "50,000 - 70,000 MXN",
      details:
        "Buscamos un desarrollador full stack con experiencia en React y Node.js para trabajar en proyectos innovadores. Requisitos: 3+ años de experiencia en desarrollo web. Conocimientos en React, Node.js y MongoDB. Experiencia con metodologías ágiles. Beneficios: Trabajo remoto. Seguro médico. Bonos por desempeño.",
      publishedAt: "2025-02-19",
      applyUrl: "https://techsolutions.com/apply/fullstack",
      contact: {
        email: "recruitment@techsolutions.com",
        phone: "+52 55 1234 5678",
      },
    },
    {
      id: 2,
      title: "Diseñador UI/UX",
      company: {
        id: 102,
        name: "Creative Minds",
        image: "https://placehold.co/400x400",
      },
      location: "Remoto",
      contractType: "Freelance",
      salary: "Por proyecto",
      details:
        "Buscamos un diseñador UI/UX para colaborar en el diseño de interfaces atractivas y funcionales. Requisitos: Experiencia en Figma y Adobe XD. Conocimientos de usabilidad y accesibilidad. Capacidad para trabajar en equipo. Beneficios: Horarios flexibles. Posibilidad de contrato a largo plazo. Acceso a cursos de diseño.",
      publishedAt: "2025-02-18",
      applyUrl: "https://creativeminds.com/apply/uiux",
      contact: {
        email: "jobs@creativeminds.com",
      },
    },
    {
      id: 3,
      title: "Ingeniero DevOps",
      company: {
        id: 103,
        name: "CloudWorks",
        image: "https://placehold.co/400x400",
      },
      location: "Barcelona, España",
      contractType: "Full-time",
      salary: "60,000 - 80,000 EUR",
      details:
        "Se busca un ingeniero DevOps con experiencia en AWS, Docker y Kubernetes para optimizar nuestra infraestructura en la nube. Requisitos: Experiencia con AWS y herramientas de CI/CD. Conocimientos en contenedores y orquestación (Docker, Kubernetes). Manejo de infraestructura como código (Terraform, Ansible). Beneficios: Opción de trabajo híbrido. Seguro de vida y salud. Presupuesto anual para formación.",
      publishedAt: "2025-02-17",
      applyUrl: "https://cloudworks.com/jobs/devops",
      contact: {
        email: "careers@cloudworks.com",
        phone: "+34 600 123 456",
      },
    },
    {
      id: 4,
      title: "Analista de Datos",
      company: {
        id: 104,
        name: "Data Insights",
        image: "https://placehold.co/400x400",
      },
      location: "Buenos Aires, Argentina",
      contractType: "Full-time",
      salary: "40,000 - 55,000 ARS",
      details:
        "Estamos en búsqueda de un Analista de Datos para interpretar datos y generar informes estratégicos. Requisitos: Experiencia en SQL, Python y Power BI. Habilidad para análisis estadístico. Beneficios: Plan de carrera. Seguro de salud. Home office parcial.",
      publishedAt: "2025-02-16",
      applyUrl: "https://datainsights.com/jobs/analyst",
      contact: {
        email: "recruitment@datainsights.com",
      },
    },
    {
      id: 5,
      title: "Gerente de Marketing Digital",
      company: {
        id: 105,
        name: "Ecom Growth",
        image: "https://placehold.co/400x400",
      },
      location: "Santiago, Chile",
      contractType: "Full-time",
      salary: "2,500,000 - 3,500,000 CLP",
      details:
        "Lidera estrategias de marketing digital para e-commerce y generación de leads. Requisitos: Experiencia en SEO, SEM y redes sociales. Manejo de plataformas de automatización de marketing. Beneficios: Oportunidad de crecimiento. Trabajo híbrido. Bonos por desempeño.",
      publishedAt: "2025-02-15",
      applyUrl: "https://ecomgrowth.com/apply/marketing",
      contact: {
        email: "hr@ecomgrowth.com",
      },
    },
    {
      id: 6,
      title: "Especialista en Ciberseguridad",
      company: {
        id: 106,
        name: "SecureTech",
        image: "https://placehold.co/400x400",
      },
      location: "Madrid, España",
      contractType: "Full-time",
      salary: "65,000 - 85,000 EUR",
      details:
        "Buscamos un especialista en ciberseguridad para reforzar la seguridad de nuestros sistemas. Requisitos: Conocimientos en análisis de vulnerabilidades, pentesting y gestión de riesgos. Certificaciones en seguridad (CISSP, CEH). Beneficios: Plan de certificaciones. Seguro médico premium. Trabajo remoto parcial.",
      publishedAt: "2025-02-14",
      applyUrl: "https://securetech.com/jobs/security",
      contact: {
        email: "security@securetech.com",
        phone: "+34 911 987 654",
      },
    },
    {
      id: 7,
      title: "Desarrollador Móvil (iOS/Android)",
      company: {
        id: 107,
        name: "AppMovil",
        image: "https://placehold.co/400x400",
      },
      location: "Remoto",
      contractType: "Full-time",
      salary: "55,000 - 75,000 USD",
      details:
        "Estamos buscando un desarrollador móvil con experiencia en Swift y Kotlin para crear aplicaciones de alto rendimiento. Requisitos: Experiencia en desarrollo de apps nativas para iOS y Android. Conocimientos en Flutter o React Native son un plus. Beneficios: Trabajo 100% remoto. Presupuesto para formación. Seguro médico.",
      publishedAt: "2025-02-13",
      applyUrl: "https://appmovil.com/apply/mobiledev",
      contact: {
        email: "jobs@appmovil.com",
      },
    },
  ];

  return (
    <>
      <section className="md:col-span-10 lg:col-span-6 flex flex-col md:px-10 py-4 px-8 gap-8 max-h-fit mb-12 z-10 backdrop-blur-3xl">
        <h2 className="text-2xl font-bold">Explore jobs</h2>
        <form className="flex-1 flex max-h-fit items-stretch justify-center gap-4">
          <Input
            id="job"
            name="job"
            type="text"
            className="h-full"
            placeholder="Search jobs here..."
          />
          <Button type="submit">Search</Button>
        </form>
        <h2 className="text-2xl font-bold pl-4">Latest offers</h2>
        {/*MAPEAR EL MOCK DE LOS TRABAJOS (cuando sea dinámico me voy a querer colgar :c) */}
        {mockData.map((job) => (
          <div key={job.id} className="bg-zinc-800 p-4 rounded-xl">
            <h2 className="text-lg font-bold mb-2">{job.title}</h2>
            <div className="flex gap-3 items-center w-fit">
              <img src={job.company.image} className="w-8 h-8 rounded-full" />
              <span className="text-zinc-400">{job.company.name}</span>
              <p>{job.contractType}</p>
            </div>
            <p className="line-clamp-2 mb-4">{job.details}</p>
            <Button onClick={() => {
              setJobInView(job)
            }}>Read more</Button>
          </div>
        ))}
      </section>
      {jobInView && <section className="fixed lg:static inset-0 w-full bottom-1/12 bg-zinc-800 lg:col-span-4 px-4 py-2 h-full z-20">
        <div className="top-0 sticky">
        <button className="rounded-full p-2 md:p-4 hover:bg-zinc-700 cursor-pointer" onClick={() => setJobInView(null)}><StepBack /></button>
        <br />
        <h2 className="text-2xl font-bold mb-2">{jobInView.title}</h2>
            <div className="flex gap-3 items-center w-fit sticky top-0">
              <img src={jobInView.company.image} className="w-8 h-8 rounded-full" />
              <span className="text-zinc-400">{jobInView.company.name}</span>
              <p>{jobInView.contractType}</p>
            </div>
        </div>
      </section>}
    </>
  );
};

export default Jobs;
