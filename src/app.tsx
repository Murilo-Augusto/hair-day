import { useState } from "react";
import { Form } from "./components/form";

export type Appointment = {
  date: string;
  time: string;
  customerName: string;
};

export function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-800 p-3">
      <div className="relative mx-auto flex w-full max-w-360">
        <div className="absolute -top-3 -left-3 grid place-items-center rounded-br-lg bg-gray-600 px-5 py-3">
          <img src="/logotipo.png" alt="hair day logotipo" />
        </div>

        <div className="flex max-w-124.5 flex-1 flex-col gap-6 rounded-xl bg-gray-700 p-20">
          <div className="space-y-2">
            <h2 className="font-bold text-2xl text-gray-100">
              Agende um atendimento
            </h2>
            <p className="text-gray-300 text-sm">
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </p>
          </div>

          <Form appointments={appointments} />
        </div>
      </div>
    </div>
  );
}
