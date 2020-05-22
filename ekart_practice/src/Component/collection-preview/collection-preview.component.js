import React from 'react';
import './collection-preview.style.scss';
import CollectionItems from '../collection-items/collection-items.component';
import CButton from '../CButton/Cbotton.component';

const CollectionPreview = ({ title ,items}) => (
       <div className='collection-preview'>
       <div>
       <div className='title'>{title.toUpperCase()}</div>
       </div>
         <div className='preview' >

           {
               items
               .filter((items, index) => index < 4)
               .map((
                 items
               ) => (
                   <CollectionItems key={items.id} items={items} />
               ))
           }
         </div>
       </div>
)



// const CollectionPreview =({title , items}) => (
//     <div className='collection-preview '>
//       <h1 className='title'>{title.toUpperCase()}</h1>
//       <div className='preview'>
//         {
//             items
//             .filter((items, index) => index < 4)
//             .map(({id , ...otherItemProps})=> (
//                 <CollectionItems key={items.id} {...otherItemProps} />
//             ))
//         }
//       </div>
//     </div>
// )


export default CollectionPreview;