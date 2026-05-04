import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import type { Appointment } from "@/app";
import { Button } from "../components/button";
import { DatePicker } from "../components/date-picker";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";

interface FormProps {
  appointments: Appointment[];
}

type TimePeriod = {
  label: string;
  times: string[];
};

function createHourlySlots(startHour: number, endHour: number) {
  return Array.from({ length: endHour - startHour + 1 }, (_, index) => {
    const hour = startHour + index;
    return `${String(hour).padStart(2, "0")}:00`;
  });
}

const TIME_PERIODS: TimePeriod[] = [
  { label: "Manhã", times: createHourlySlots(9, 12) },
  { label: "Tarde", times: createHourlySlots(13, 18) },
  { label: "Noite", times: createHourlySlots(19, 21) },
];

export function Form({ appointments }: FormProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customerName, setCustomerName] = useState("");

  const occupiedTimes = useMemo(() => {
    if (!date) {
      return new Set<string>();
    }

    return new Set(
      appointments
        .filter((appointment) => appointment.date === date)
        .map((appointment) => appointment.time),
    );
  }, [date, appointments]);

  useEffect(() => {
    if (time && occupiedTimes.has(time)) {
      setTime("");
    }
  }, [time, occupiedTimes]);

  const isFormValid = Boolean(date && time && customerName);

  return (
    <form className="flex flex-col gap-6">
      <div className="space-y-8">
        <DatePicker
          id="date-input"
          label="Data"
          placeholder="Digite a data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          icon={CalendarBlankIcon}
        />

        <div className="space-y-2">
          <span className="font-bold text-gray-200">Horários</span>

          <div className="space-y-3">
            {TIME_PERIODS.map((period) => (
              <div key={period.label} className="space-y-2">
                <span className="text-gray-300 text-sm">{period.label}</span>

                <div className="flex flex-wrap gap-2">
                  {period.times.map((periodTime) => (
                    <TimeSelect
                      key={periodTime}
                      value={periodTime}
                      isSelected={time === periodTime}
                      disabled={occupiedTimes.has(periodTime)}
                      onClick={() => setTime(periodTime)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TextInput
          id="client-name-input"
          label="Cliente"
          placeholder="Digite o nome do cliente"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          icon={UserSquareIcon}
        />
      </div>

      <Button disabled={!isFormValid}>AGENDAR</Button>
    </form>
  );
}
