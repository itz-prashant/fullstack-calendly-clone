import EventTypeForm from "@/app/components/EventTypeForm";
import Dashboard from "../../page";

export default function NewEventTypePage(){
    return(
        <div>
            <Dashboard />
            <div className="mt-4">
                <EventTypeForm />
            </div>
        </div>
    )
}