import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Send, StepBack } from "lucide-react";

const MessagePage = () => {
  const [currentMessages, setCurrentMessages] = useState<any>();

  const messagesMock = [
    {
      conversationId: 1,
      currentUserId: 301,
      participants: [
        {
          id: 201,
          name: "pollo_frontend",
          role: "Recruiter",
          companyId: 101,
          avatar: "hellyea.webp",
        },
        {
          id: 301,
          name: "Carlos Pérez",
          role: "Candidate",
        },
      ],
      messages: [
        {
          id: 1,
          senderId: 201,
          content:
            "Hola Carlos, ¿cómo estás? Me gustaría hablar sobre algunas oportunidades que pueden interesarte.",
          timestamp: "2025-02-19T10:15:00Z",
        },
        {
          id: 2,
          senderId: 301,
          content: "Hola María, estoy bien, gracias. Claro, dime más detalles.",
          timestamp: "2025-02-19T10:30:00Z",
        },
        {
          id: 3,
          senderId: 201,
          content: "Genial. ¿Podemos hacer una videollamada esta semana?",
          timestamp: "2025-02-19T10:45:00Z",
        },
      ],
    },
    {
      conversationId: 2,
      currentUserId: 302,
      participants: [
        {
          id: 202,
          name: "Qiguanchanghong",
          role: "Recruiter",
          companyId: 104,
          avatar: "https://media.tenor.com/RFLHa8XdOO4AAAAe/cats-rice-hat.png",
        },
        {
          id: 302,
          name: "Laura Méndez",
          role: "Candidate",
        },
      ],
      messages: [
        {
          id: 4,
          senderId: 202,
          content:
            "Hola Laura, aquí está el documento con información sobre la empresa.",
          timestamp: "2025-02-18T09:00:00Z",
          attachments: [
            {
              type: "document",
              url: "https://example.com/files/info-empresa.pdf",
              fileName: "Info_Empresa.pdf",
            },
          ],
        },
        {
          id: 5,
          senderId: 302,
          content: "Gracias Javier, lo revisaré y te aviso si tengo preguntas.",
          timestamp: "2025-02-18T09:10:00Z",
        },
      ],
    },
    {
      conversationId: 3,
      currentUserId: 302,
      participants: [
        {
          id: 203,
          name: "Elhapihapi",
          role: "Recruiter",
          companyId: 106,
          avatar: "hapihapi.gif",
        },
        {
          id: 302,
          name: "Laura Méndez",
          role: "Candidate",
        },
      ],
      messages: [
        {
          id: 6,
          senderId: 302,
          content:
            "Hola Sofía, ¿siguen buscando un Especialista en Ciberseguridad?",
          timestamp: "2025-02-17T15:20:00Z",
        },
        {
          id: 7,
          senderId: 203,
          content:
            "¡Hola Laura! Sí, aún tenemos vacantes. ¿Te gustaría agendar una llamada?",
          timestamp: "2025-02-17T15:45:00Z",
        },
        {
          id: 8,
          senderId: 302,
          content: "Sí, estaría genial. ¿Cuándo podríamos hacerla?",
          timestamp: "2025-02-17T16:00:00Z",
        },
      ],
    },
  ];

  return (
    <>
      <section className="md:col-span-6 lg:col-span-3 flex flex-col md:px-10 py-4 px-8 max-h-fit mb-12 z-10 backdrop-blur-3xl">
        <h2 className="text-2xl font-bold">Your messages</h2>
        <form className="flex-1 flex max-h-fit items-stretch justify-center mb-2">
          <Input
            id="message"
            name="message"
            type="text"
            className="h-full"
            placeholder="Search messages here..."
          />
          <Button type="submit">Search</Button>
        </form>
        {/*MAPEAR EL MOCK DE LOS TRABAJOS (cuando sea dinámico me voy a querer colgar :c) */}
        {messagesMock.map((message) => (
          <div
            key={message.conversationId}
            className="bg-zinc-800 p-4 rounded-xl border-b border-zinc-700 mb-1 rounded-r-none hover:bg-zinc-600 transition-colors cursor-pointer"
            onClick={() => {
              setCurrentMessages(message.messages);
              console.log(currentMessages);
            }}
          >
            <div className="flex gap-1">
              <img
                className="w-8 h-8 rounded-full"
                src={message.participants[0].avatar}
                alt={message.conversationId.toString()}
              />
              <h3 className="font-bold">{message.participants[0].name}</h3>
            </div>
            <p className="text-zinc-400 line-clamp-1">
              {message.messages[message.messages.length - 1].content}
            </p>
          </div>
        ))}
      </section>

      {currentMessages && (
        <section className="fixed lg:static inset-0 w-full bottom-1/12 bg-zinc-800 lg:col-span-6 px-4 md:py-2 pb-12 h-full z-20">
          <div className="top-0 sticky flex flex-col h-full justify-between">
            <button
              className="rounded-full p-2 md:p-4 hover:bg-zinc-700 cursor-pointer"
              onClick={() => setCurrentMessages(null)}
            >
              <StepBack />
            </button>
            <section className="flex-1 flex items-end justify-end ">
              <div className="bg-blue-600 hover:bg-blue-500 py-1 px-2 mb-4 rounded-lg">
                Ola
              </div>
            </section>
            <form className="flex justify-self-end">
              <Input type={""} id={""} name={""} className="rounded-r-none" />
              <button className="bg-zinc-700 border-l-0 rounded-r-lg pr-2">
                <Send />
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default MessagePage;
