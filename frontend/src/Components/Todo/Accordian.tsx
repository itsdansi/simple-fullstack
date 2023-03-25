import {useState, Fragment} from "react";
import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import EditButton, {DeleteButton} from "./Buttons";

export default function Accordian() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="my-center-class w-200 flex justify-center flex-col items-center mt-3">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re
            constantly growing. We&apos;re constantly making mistakes. We&apos;re
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>

      <div className="flex ml-5">
        <Link to="/update_todo">
          <EditButton />
        </Link>
        <Link to="/delete_todo">
          <DeleteButton />
        </Link>
      </div>
    </div>
  );
}
