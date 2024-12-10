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
            <h3>note: this is a work in progress</h3>
            <ViewNotes></ViewNotes>
            <CreateNotes></CreateNotes>
          </div>
        </div>
      </div>
    )
  }