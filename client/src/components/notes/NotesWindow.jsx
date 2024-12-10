import CreateNotes from "./CreateNotes";
import ViewNotes from "./ViewNotes";

export default function NotesWindow() {

    return (
      <div className='flexContainerRow windowMargin'>
        <div className='window newWindow aboutWindow'>
          <div className="title-bar">
            <div className="title-bar-text">🎨 paint</div>
          </div>
          <div className='flexContainerColumn'>
            <ViewNotes></ViewNotes>
            <CreateNotes></CreateNotes>
          </div>
        </div>
      </div>
    )
  }