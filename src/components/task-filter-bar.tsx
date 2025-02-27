import { Plus, Search, X } from "lucide-react";
import Button from "./button";
import Input from "./input";

export default function TaskFilterBar() {
    return (
        <div className="flex flex-row items-center justify-between w-[100%]">
            <div className="flex flex-row items-center gap-2.5 w-[50%]">
                <span className="font-semibold">Filtros: </span>
                <Input placeholder="Nome" />
                <Button>
                    <Search size={20} />
                    <span>Filtrar</span>
                </Button>
                <Button className="bg-white">
                    <X size={20} />
                    <span>Limpar</span>
                </Button>
            </div>
            <Button className="bg-black text-white border-black">
                <Plus size={20} color="#fff" />
                <span>Adicionar Tarefa</span>
            </Button>
        </div>
    )
}