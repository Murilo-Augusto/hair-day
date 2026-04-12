import { TrashIcon, UserSquareIcon } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { ButtonIcon } from "./components/button-icon";
import { TextInput } from "./components/text-input";
import { TimeSelect } from "./components/time-select";

export function App() {
  return (
    <div className="flex min-h-screen flex-col gap-6 bg-gray-800 p-6">
      <Button>AGENDAR</Button>

      <TextInput icon={UserSquareIcon} placeholder="Nome do cliente" />

      <ButtonIcon icon={TrashIcon} />

      <TimeSelect value="09:00" />
    </div>
  );
}
