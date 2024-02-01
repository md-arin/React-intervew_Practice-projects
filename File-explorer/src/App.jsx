import { useState } from 'react'
import './App.css'
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
  
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleIsertNode = (folderid,item,isFolder) => {
    const finalTree = insertNode(explorerData, folderid, item, isFolder)

    setExplorerData(finalTree)
  }

  return (
    <>
      <Folder handleIsertNode={handleIsertNode} explorer={explorerData} />
    </>
  )
}

export default App
