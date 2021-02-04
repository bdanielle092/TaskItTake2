// import React from 'react';
// import './index.scss';


// class Layout extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             leftOpen: true,

//         }
//     }

//     toggleSidebar = (event) => {
//         let key = `${event.currentTarget.parentNode.id}Open`;
//         this.setState({ [key]: !this.state[key] });
//     }

//     render() {
//         let leftOpen = this.state.leftOpen ? 'open' : 'closed';
//         return (
//             <div id='layout'>

//                 <div id='left' className={leftOpen} >
//                     <div className='icon'
//                         onClick={this.toggleSidebar} >
//                         &equiv;
//                 </div>
//                     <div className={`sidebar ${leftOpen}`} >
//                         <div className='header'>
//                             <h3 className='title'>
//                                 Board
//                       </h3>
//                         </div>
//                         <div className='content'>
//                             <h3>Left content</h3>
//                             <p>
//                                 Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
//                         </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div id='main'>
//                     <div className='header'>
//                         <h3 className={`
//                         title
//                         ${'left-' + leftOpen}

//                     `}>
//                             Board
//                     </h3>
//                     </div>
//                     <link>New Board</link>
//                     <link>Personal</link>
//                     <link>Work</link>
//                 </div>
//             </div>
//         )

//     }
// }

// export default Layout;
