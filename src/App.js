import React, { useState } from "react";
import {
  Calendar,
  MessageSquare,
  Mail,
  AlertCircle,
  Clock,
  Users,
  Trophy,
  Copy,
  Smartphone,
  Code,
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("pre");
  const [activeSubTab, setActiveSubTab] = useState({});

  const toggleSubTab = (id, tab) => {
    setActiveSubTab((prev) => ({ ...prev, [id]: tab }));
  };

  const journeyData = {
    pre: [
      {
        id: 1,
        day: "D-52",
        date: "17 de Abril",
        title: "Save the Date",
        status: "Enviado",
        channel: "Omnicanal",
        objective:
          'Reserva de fecha y posicionamiento de concepto "Mundial Tech".',
        wa: "Subject: Save the date: Broxel & Google Cloud Invitational 2026 ⛳\nPreheader: The world is watching. Play your game.\n\n📅 08 de junio, 2026\n\nEste año, el torneo se vive en grande en el marco del Mundial Tech 2026. Reserva la fecha.",
        emailSubject:
          "Save the date: Broxel & Google Cloud Invitational 2026 ⛳",
        emailBody:
          "Este año, el torneo se vive en grande. En el marco del Mundial Tech 2026, prepárate para una experiencia donde el juego, la tecnología y el networking se encuentran en el green. Muy pronto recibirás tu invitación con todos los detalles para confirmar tu participación.\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        details: "Mensaje ya enviado el viernes pasado.",
      },
      {
        id: 2,
        day: "D-40",
        date: "29 de Abril",
        title: "Invitación Oficial & RSVP",
        status: "Próximo",
        channel: "WhatsApp / Mail",
        objective:
          "Apertura de registros. Segmentación entre Jugador y Comensal.",
        wa: "🏆 ¡Es momento de entrar a la cancha! La invitación oficial para el Broxel & Google Cloud Invitational 2026 ha llegado. Únete al Mundial Tech este 08 de junio.\n\n🔗 Regístrate aquí: [Link]",
        emailSubject:
          "Invitación Oficial: Broxel & Google Cloud Invitational 2026",
        emailBody:
          'Hola {{name}},\n\nEs un placer invitarte formalmente a la edición 2026 de nuestro torneo. Bajo el concepto "Mundial Tech", hemos diseñado una jornada de competencia de alto nivel y networking estratégico.\n\nFavor de confirmar tu asistencia en el siguiente enlace, indicando si participarás en el torneo de golf o si nos acompañarás exclusivamente en la comida de premiación.\n\n[Botón: Registrarme Ahora]\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]',
        details:
          "El formulario debe permitir elegir entre perfil Jugador o Comensal.",
      },
      {
        id: 3,
        day: "D-30",
        date: "09 de Mayo",
        title: "Reminder 1: Cupos",
        status: "Planeado",
        channel: "WhatsApp",
        objective: "Recordatorio de registro para quienes no han respondido.",
        wa: "El mundo está observando y el green se está llenando. ⛳ No te quedes fuera de la experiencia tecnológica y deportiva del año. Los lugares para jugadores son limitados.\n\n🔗 [Link de Registro]",
        emailSubject: "Recordatorio: No te quedes fuera del Mundial Tech 2026",
        emailBody:
          "Hola {{name}},\n\nNotamos que aún no has completado tu registro. Te recordamos que el cupo para jugadores es limitado y se asigna por orden de registro. Si prefieres asistir únicamente a la comida de networking, por favor infórmanos también a través del portal.\n\n[Link al Portal de Registro]\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        details: "Enfoque en urgencia para el perfil de jugadores.",
      },
      {
        id: 4,
        day: "D-20",
        date: "19 de Mayo",
        title: "Confirmación de Perfil (Dual)",
        status: "Planeado",
        channel: "Mail / WhatsApp",
        objective: "Datos logísticos específicos por tipo de asistente.",
        dual: true,
        waPlayer:
          "¡Tu lugar está casi listo! 🏌️‍♂️ Confirma tu hándicap y talla de camisa para tu kit de bienvenida: [Link]",
        waDiner:
          "¡Nos emociona que nos acompañes! 🥂 Para que tu experiencia en la comida sea perfecta, confírmanos restricciones alimentarias: [Link]",
        emailSubjectPlayer:
          "Acción Requerida: Detalles de tu participación (Jugador)",
        emailBodyPlayer:
          "Estamos preparando tu kit de bienvenida personalizado. Para ello, requerimos que confirmes tu hándicap actual y tu talla de playera tipo Polo. Estos datos son indispensables para tu registro en el campo.\n\n[Link Formulario Logístico]\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        emailSubjectDiner: "Confirmación de Asistencia: Comida & Networking",
        emailBodyDiner:
          "Nos estamos preparando para recibirte en la comida de premiación del torneo. Por favor, ayúdanos confirmando si cuentas con alguna restricción alimentaria o requerimiento especial para asegurar que tu experiencia sea impecable.\n\n[Link Formulario Preferencias]\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        details: "Campaña segmentada por el tipo de registro inicial.",
      },
      {
        id: 5,
        day: "D-10",
        date: "29 de Mayo",
        title: "Confirmación de Agenda",
        status: "Planeado",
        channel: "WhatsApp / Mail",
        objective:
          "Informar horarios de llegada diferenciados por perfil de invitado.",
        wa: "¡Estamos a solo 10 días del Mundial Tech! ⛳ Te confirmamos los horarios de cita para el 08 de junio:\n\n• Jugadores: Registro a partir de las 07:30 AM.\n• Comensales: Comida de premiación a partir de las 02:30 PM.\n\n¡Te esperamos! [Link Agenda]",
        emailSubject: "Agenda Oficial: Broxel & Google Cloud Invitational 2026",
        emailBody:
          "Hola {{name}},\n\nFaltan solo 10 días para nuestro encuentro en el green. Queremos confirmar los horarios clave para asegurar tu mejor experiencia:\n\nSi participas como JUGADOR:\nTe esperamos para el registro y desayuno a partir de las 07:30 AM. La salida (escopetazo) será puntualmente a las 08:30 AM.\n\nSi nos acompañas como COMENSAL:\nLa cita para la comida de premiación y networking es a partir de las 02:30 PM.\n\n[Link a la Agenda Completa]\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        details: "Aviso clave para coordinar la llegada de ambos perfiles.",
      },
      {
        id: 6,
        day: "D-3",
        date: "05 de Junio",
        title: "Acceso Final (QR)",
        status: "Planeado",
        channel: "WhatsApp",
        objective: "Entrega de pase digital y ubicación.",
        wa: "¡Todo listo! Aquí tienes tu pase de acceso (QR) y la ubicación del club. Nos vemos en el Green. [Link QR] [Ubicación Maps]",
        emailSubject: "Tu Pase de Acceso: Broxel & Google Cloud Invitational",
        emailBody:
          "Adjunto a este correo y vía WhatsApp encontrarás tu código QR de acceso. Por favor, tenlo a la mano al llegar al club para agilizar tu entrada. Te recordamos la ubicación: [Link de Maps].\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
        details:
          "Operación crítica para evitar cuellos de botella en la entrada.",
      },
    ],
    event: [
      {
        id: 7,
        day: "D-0",
        date: "08 de Junio",
        title: "Welcome & Leaderboard",
        status: "Evento",
        channel: "WhatsApp",
        wa: "¡Bienvenido al Mundial Tech! Sigue el tablero de posiciones en tiempo real aquí: [Link Leaderboard]",
        emailSubject: "¡Bienvenidos al Mundial Tech 2026!",
        emailBody:
          "Hoy celebramos la innovación y el deporte. Sigue los resultados en vivo y comparte tu experiencia con el hashtag #MundialTech2026.\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
      },
    ],
    post: [
      {
        id: 9,
        day: "D+1",
        date: "09 de Junio",
        title: "Gracias & Fotos",
        status: "Planeado",
        channel: "Mail / WA",
        wa: "¡Qué gran torneo! Gracias por ser parte del Mundial Tech 2026. Aquí puedes descargar tus fotos: [Link Galería]",
        emailSubject: "Gracias por acompañarnos en el Green",
        emailBody:
          "Fue un honor contar con tu presencia. Esperamos que hayas disfrutado de la jornada tanto como nosotros. Te compartimos la galería oficial del evento y los resultados finales de la competencia.\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
      },
    ],
    contingency: [
      {
        id: 10,
        day: "N/A",
        date: "Bajo Demanda",
        title: "Sold Out Jugadores",
        status: "Opcional",
        channel: "WhatsApp / Mail",
        wa: "⚠️ Cupo lleno para jugadores. ¡El interés ha sido increíble! Te invitamos a registrarte como comensal para disfrutar de la comida y el networking. [Link]",
        emailSubject: "Actualización de Cupo: Torneo de Golf",
        emailBody:
          'Debido a la alta demanda, el cupo para jugadores del torneo se ha completado. Sin embargo, no queremos que te pierdas el networking del "Mundial Tech". Te extendemos una invitación especial para unirte a nosotros directamente en la comida de premiación.\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]',
      },
      {
        id: 11,
        day: "N/A",
        date: "Bajo Demanda",
        title: "Ajuste (Desinvitación)",
        status: "Opcional",
        channel: "WhatsApp",
        wa: "Lamentamos informarte que por causas ajenas hemos ajustado el cupo de juego. Tu invitación para la comida y networking sigue activa. ¡Te esperamos!",
        emailSubject: "Aviso Importante: Ajuste en Categoría de Invitación",
        emailBody:
          "Lamentablemente, por razones de logística imprevistas, no podremos contar con tu participación en el campo de juego. No obstante, reiteramos nuestra invitación para que nos acompañes en la comida de premiación y networking, donde tu lugar sigue reservado.\n\n--- \n🔗 [LIGA AL DISEÑO FINAL EN HTML]",
      },
    ],
  };

  const StatusBadge = ({ status }) => {
    const colors = {
      Enviado: "bg-green-100 text-green-700 border-green-200",
      Próximo: "bg-blue-100 text-blue-700 border-blue-200",
      Planeado: "bg-gray-100 text-gray-700 border-gray-200",
      Evento: "bg-purple-100 text-purple-700 border-purple-200",
      Opcional: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return (
      <span
        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div
      className="min-h-screen bg-slate-50 p-4 md:p-8"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');`}
      </style>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 flex items-center gap-3 tracking-tight">
              <Trophy className="text-emerald-600" />
              Broxel & Google Cloud Invitational 2026
            </h1>
            <p className="text-slate-500 mt-1 font-medium italic opacity-80">
              "The world is watching. Play your game." — Mundial Tech 2026
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl flex items-center gap-3">
            <Calendar className="text-emerald-600" />
            <div>
              <p className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-widest">
                Día del Evento
              </p>
              <p className="text-lg font-bold text-emerald-900 leading-tight">
                08 de Junio, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Principales */}
      <div className="max-w-6xl mx-auto mb-6 flex gap-2 p-1.5 bg-slate-200 rounded-2xl w-fit">
        {["pre", "event", "post", "contingency"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all capitalize tracking-tight ${
              activeTab === tab
                ? "bg-white shadow-sm text-blue-600 scale-[1.02]"
                : "text-slate-600 hover:bg-slate-300 opacity-70"
            }`}
          >
            {tab === "pre"
              ? "Pre-Evento"
              : tab === "event"
              ? "Día D"
              : tab === "post"
              ? "Post-Evento"
              : "Contingencias"}
          </button>
        ))}
      </div>

      {/* Grid de Tarjetas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journeyData[activeTab].map((item) => {
          const currentSubTab = activeSubTab[item.id] || "wa";

          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest mb-1">
                    {item.day} • {item.date}
                  </p>
                  <h3 className="font-extrabold text-slate-800 text-lg leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <StatusBadge status={item.status} />
              </div>

              {/* Sub-tabs: WA vs Mail */}
              <div className="flex border-b border-slate-100 bg-white">
                <button
                  onClick={() => toggleSubTab(item.id, "wa")}
                  className={`flex-1 py-3 text-[11px] font-extrabold flex items-center justify-center gap-2 transition-all tracking-wider uppercase ${
                    currentSubTab === "wa"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <MessageSquare size={14} /> WhatsApp
                </button>
                <button
                  onClick={() => toggleSubTab(item.id, "mail")}
                  className={`flex-1 py-3 text-[11px] font-extrabold flex items-center justify-center gap-2 transition-all tracking-wider uppercase ${
                    currentSubTab === "mail"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <Mail size={14} /> Email
                </button>
              </div>

              <div className="p-6 flex-grow">
                {currentSubTab === "wa" ? (
                  <div className="space-y-4">
                    {item.dual ? (
                      <div className="space-y-3">
                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl relative group">
                          <p className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-widest mb-2">
                            Para Jugadores
                          </p>
                          <p className="text-[13px] text-slate-700 leading-relaxed font-medium">
                            "{item.waPlayer}"
                          </p>
                          <Copy
                            className="absolute top-3 right-3 text-emerald-300 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                            size={14}
                          />
                        </div>
                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl relative group">
                          <p className="text-[9px] font-extrabold text-amber-600 uppercase tracking-widest mb-2">
                            Para Comensales
                          </p>
                          <p className="text-[13px] text-slate-700 leading-relaxed font-medium">
                            "{item.waDiner}"
                          </p>
                          <Copy
                            className="absolute top-3 right-3 text-amber-300 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                            size={14}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl relative group">
                        <p className="text-[13px] text-slate-700 leading-relaxed font-medium italic opacity-90">
                          "{item.wa}"
                        </p>
                        <Copy
                          className="absolute top-3 right-3 text-slate-300 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                          size={14}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {item.dual ? (
                      <div className="space-y-3">
                        <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
                          <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2 underline">
                            Asunto: {item.emailSubjectPlayer}
                          </p>
                          <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                            {item.emailBodyPlayer}
                          </p>
                        </div>
                        <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
                          <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2 underline">
                            Asunto: {item.emailSubjectDiner}
                          </p>
                          <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                            {item.emailBodyDiner}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
                        <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                          <p className="text-[11px] font-extrabold text-slate-800 tracking-tight">
                            Asunto: {item.emailSubject}
                          </p>
                          <Copy
                            size={12}
                            className="text-slate-300 hover:text-blue-500 cursor-pointer"
                          />
                        </div>
                        <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                          {item.emailBody}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {item.details && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-bold italic">
                  <AlertCircle size={14} className="text-blue-500 shrink-0" />
                  {item.details}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
