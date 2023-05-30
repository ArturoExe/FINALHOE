import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export function StatusPicker({ statusPicked, item }) {
  statusPicked = statusPicked.toLowerCase().replace(" ", "");

  const { reload } = useRouter();
  async function handleStatusChange(item, type) {
    item = { ...item, estado: type };

    console.log(item);

    try {
      await fetch("http://localhost:3000/api/appointStatus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      reload("/admin");
      console.log(item);
    } catch (error) {
      console.log(error);
    }

    console.log("changed status");
  }

  return (
    <div className="status-dropdown">
      <button
        className={`btn btn-small btn-fixed-width ${
          statusPicked === "citado" && statusPicked
        }`}
        onClick={() => handleStatusChange(item, "Citado")}
      >
        <FontAwesomeIcon className="icon-secundary" icon={faCalendar} />
        <p className="small-font">Citado</p>
      </button>
      <button
        className={`btn btn-small btn-fixed-width ${
          statusPicked === "pendiente" && statusPicked
        }`}
        onClick={() => handleStatusChange(item, "Pendiente")}
      >
        <FontAwesomeIcon className="icon-secundary" icon={faClock} />
        <p className="small-font">Pendiente</p>
      </button>
      <button
        className={`btn btn-small btn-fixed-width ${
          statusPicked === "encurso" && statusPicked
        }`}
        onClick={() => handleStatusChange(item, "En curso")}
      >
        <FontAwesomeIcon className="icon-secundary" icon={faHourglass} />
        <p className="small-font">En Curso</p>
      </button>
      <button
        className={`btn btn-small btn-fixed-width ${
          statusPicked === "completado" && statusPicked
        }`}
        onClick={() => handleStatusChange(item, "Completado")}
      >
        <FontAwesomeIcon className="icon-secundary" icon={faCheck} />
        <p className="small-font">Completado</p>
      </button>
      <button
        className={`btn btn-small btn-fixed-width ${
          statusPicked === "cancelado" && statusPicked
        }`}
        onClick={() => handleStatusChange(item, "Cancelado")}
      >
        <FontAwesomeIcon className="icon-secundary" icon={faXmark} />
        <p className="small-font">Cancelado</p>
      </button>
    </div>
  );
}
