import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";

function CreateNotes(noteItem){
    return (
        <Note
            key={noteItem.key}
            tite={noteItem.title}
            content={noteItem.content}
        />
    )
}


function App(){
    return(
        <div>
            <Header/>
            {notes.map(CreateNotes)}
            <Footer/>
        </div>
    );
};

export default App;
