import { useState } from "react";


function Folder({handleIsertNode, explorer}){
    const [expand,setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) =>{
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddfolder = (e) => {
        if(e.key === 'Enter' && e.target.value){
            handleIsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput,visible:false})
        }    
    }

    if(explorer.isFolder){
    return(
        <div className="mt-2" >
            <div className=" cursor-pointer mt-1.5 bg-slate-300 flex justify-between p-1 w-80 ml-4" onClick={()=>setExpand(!expand)}>
            <span className="text-md mr-2 mb-0.5">📁 {explorer.name}</span>

            <div>
                <button onClick={(e) => handleNewFolder(e,true)} className=" outline mx-2 font-normal bg-white">Folder +</button>
                <button onClick={(e) => handleNewFolder(e,false)} className=" outline mx-2 bg-white">File +</button>
            </div>
            </div>

            <div className=" pl-4 mt-1 ml-3" style={{display : expand ? "block" : "none"}}>

                {
                    showInput.visible &&(
                        <div className="flex items-center gap-1">
                            <span className=" mt-1">{showInput.isFolder ? "📁" : "📄"}</span>
                            <input 
                            type="text"
                            onKeyDown={onAddfolder}
                            onBlur={()=>setShowInput({...showInput, visible: false})}
                            className=" mt-2 p-1 flex border border-solid border-gray-300 items-center justify-between cursor-pointer" 
                            autoFocus
                            />
                        </div>
                    )
                }


                {explorer.items.map((item)=>{
                    return (
                        <Folder handleIsertNode={handleIsertNode} explorer={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
             } else{
        return <span className=" mt-1 pl-1 ml-2 flex flex-col">📄{explorer.name}</span>
    }
}

export default Folder;