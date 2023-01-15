import React from "react";
import "./About.css"


function About() {
    const[contact, setContact] = React.useState({
        title: 'Inspiration Stories from Real Florist ',
        text: ' We surveyed florists all over the world and gathered sis flral inspirations. It was not an easy task and we thank everyone',
        phone: '+234 8175670315',
        email: 'kennyoderyndeh@gmail.com',
        isFavourite: true,
    })

        const [image, setImage] = React.useState({
            isFavouriteImage: false,

        })

    let imgFav = image.isFavouriteImage ? "/images/watercolor.jpg" : "/images/watercolor4.jpg"

    function toggleImage() {
        setImage( prevContact => {
            return{
                isFavouriteImage: !prevContact.isFavouriteImage
            
            }

        })
        
    }

    // let iconFav = contact.isFavourite ? "/images/isfav1.PNG" :"/images/isFav2.PNG" 
    let iconFav = contact.isFavourite ? "/images/isfav1.PNG" : "/images/isFav2.PNG"
    
    function toggleIcon(){
        setContact(prevContact => {

            return {
                ...prevContact,

                isFavourite: !prevContact.isFavourite

            }
        })
    }

    return(
        <main className="main-container1">
            <article className="card">
                <img 
                src={imgFav}
                className="card-img"
                onClick={toggleImage}
                />

                <div className="card-info">

                    <img 
                    alt="memes-image"
                    src={iconFav} 
                    className="card-icon1"
                    onClick={toggleIcon}
                    />
                    <div className="text-box">
                        <h4 className="card-title">{contact.title} </h4>
                        <p className="card-text">{contact.text} </p>
                        <p className="card-contact">{contact.phone}</p>
                        <p className="card-email">{contact.email}</p>
                    </div>
                        
                    
                </div>

            </article>
            {/* <h1>This the ABOUT page</h1>
            <h3>I live in the{house.type}, it has many blocksof flat</h3>
            <h3>Situated at {house.add}, it painted {house.color}</h3>
            <button type="button" onClick={ () => setHouse('High-rise')}></button> */}
        </main>
    )
}
export default About;