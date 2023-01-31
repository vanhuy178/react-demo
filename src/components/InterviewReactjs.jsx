import React, { Component } from 'react'


// Task Extract component
// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.You’ll need to choose what props to pass to it.

// Task

// extract section profile into a component names <Profile /> and we see image element is the same and we also create a component names Avatar !
// Let's go

// util
// get image

function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}



class Avatar extends Component {
    render() {
        const { person, size } = this.props;
        return (
            <div className="avatar">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(person.imageId)}
                    alt={person.name}
                    width={size || 50}
                    height={size}
                />
            </div>
        )
    }
}

// we will pass person profile include name, imageId and size of picture here hi

const LIST_SCIENTIST = [
    {
        name: "Maria Skłodowska-Curie",
        profession: 'physicist and chemist',
        awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discovered: 'polonium (element)',
        imageId: 'szV5sdG'
    }
]

class Gallery extends Component {
    renderProfile = () => {
        return LIST_SCIENTIST.map((item, index) => {
            const { name, profession, awards, discovered, imageId } = item;

            return <Profile name={name} profession={profession} awards={awards} discovered={discovered} imageId={imageId} />
        })
    }
    render() {
        return (
            <div className='gallery'>
                {this.renderProfile()}
            </div>
        )
    }
}
//convert string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class Profile extends Component {
    render() {
        const { name, profession, awards, discovered, imageId } = this.props;
        return (
            <div className="profile">
                <Avatar person={{ name: name, imageId: imageId }} size={100} />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {capitalizeFirstLetter(profession)}
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        {awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {capitalizeFirstLetter(discovered)}
                    </li>
                </ul>

            </div>
        )
    }
}


// and it can split more now let see






// export default function Gallery() {
//     return (
//         <div>
//             {/* title */}
//             <h1>Notable Scientists</h1>
//             {/* profile 1 */}
//             <section className="profile">
//                 {/* here avatar */}
//                 <h2>Maria Skłodowska-Curie</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('szV5sdG')}
//                     alt="Maria Skłodowska-Curie"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         physicist and chemist
//                     </li>
//                     <li>
//                         <b>Awards: 4 </b>
//                         (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         polonium (element)
//                     </li>
//                 </ul>
//             </section>
//             {/* profile 2 */}
//             <section className="profile">
//                 <h2>Katsuko Saruhashi</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('YfeOqp2')}
//                     alt="Katsuko Saruhashi"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         geochemist
//                     </li>
//                     <li>
//                         <b>Awards: 2 </b>
//                         (Miyake Prize for geochemistry, Tanaka Prize)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         a method for measuring carbon dioxide in seawater
//                     </li>
//                 </ul>
//             </section>
//         </div>
//     );


// To render UI 
export default class InterviewReactjs extends Component {

    render() {
        return (
            <div className='layout'>
                <Gallery />
            </div>
        )
    }
}
