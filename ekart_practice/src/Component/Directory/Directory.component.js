import React from 'react';
import './Directory.style.scss';
import MenuItems from '../MenuItems/MenuItems.component';
import { selectDirectorySection } from '../../redux/Directory/Directory.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const  Directory = ({sections}) => {
   
    

     return (
            <div className='directory-menu'>
            {sections.map(({id , ...sections}) =>(
                
                <MenuItems key={id} {...sections}/>
            ))}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);