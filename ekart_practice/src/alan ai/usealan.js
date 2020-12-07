import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';



class useAlan extends React.Component{
    componentDidMount() {
        this.alanBtnInstance = alanBtn({ 
          key: 'aeb8425766f2cb4881a8cd5cb7fe6f0d2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: (commandData) => {
            console.log(commandData)
          },
        });
      }
 
// useEffect(() => {
//     alanBtn({
//         key:aeb8425766f2cb4881a8cd5cb7fe6f0d2e956eca572e1d8b807a3e2338fdd0dc/stage,
//         oncommand : (commandData) => {
//             console.log(commandData)
//         }
//     })
// },[])

    render(){
        return null;
    }
}

export default useAlan;