import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({onAdd,onCancel})
{
  const title=useRef();
  const description=useRef();
  const dueDate=useRef();
  const modal=useRef();
  function handelSave()
  {
  const enteredTitle=title.current.value;
  const enteredDescription=description.current.value;
  const enteredDueDate=dueDate.current.value;


if(enteredDescription.trim()==='' || enteredDueDate.trim()==='' || enteredTitle.trim()==='')
{
modal.current.open();
return;
}

  onAdd({
    title: enteredTitle,
   description: enteredDescription,
   dueDate: enteredDueDate,
  });
  }
  return (
    <>
    <Modal ref={modal} buttonLabel='close'>
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
      <p className='text-stone-500 mb-4'>Oops....... looks like you forgot to enter a value.</p>
      <p className='text-stone-500 mb-4'>Please make sure to enter a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex gap-4 items-center justify-end my-4">
        <li ><button className="text-stone-500 hover:text-stone-800 " onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button className="bg-stone-500 text-stone-50 hover:bg-stone-800 px-6 py-2 rounded-md"
          onClick={handelSave}>Save</button>
          </li>
      </menu>
      <div>
        <Input ref={title} label='Title'/>
        <Input ref={description} label='Description' isTextArea={true}/>
        <Input type='date' ref={dueDate} label='Due Date'/>
      </div>
    </div>
    </>
  );
}