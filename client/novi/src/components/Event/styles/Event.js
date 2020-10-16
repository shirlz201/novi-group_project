import styled from 'styled-components';

// See EventCard.js in the containers folder

// This is the container used to hold mulitiple event cards
export const Container = styled.section`
    background-color: white;
`;

export const Card = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 820px;
    min-height: 150px;
    margin: 2em auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 10px;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ImagePane = styled.div`
    max-width: 25%;
    display: flex;
    height: auto;

    @media (max-width: 700px) {
        max-width: 100%;
        padding: 0px;
        text-align: center;
        max-height: 10rem;
    }
`;

export const InfoPane = styled.div`
    display: flex; 
    flex-wrap: wrap;
    align-items: center;
    padding: 1em 4%;
    color: black;
    overflow: hidden;
`;


export const Title = styled.h1`
    font-size: 1.3rem;
    line-height: 1.1;
    max-width: 80%;
    // margin-top: 10px;
    margin-bottom: 8px;
    padding:0px;
    
    @media (max-width: 700px) {
        max-width: 100%;
        // font-size: 35px;
    }
`;


// export const SubTitle = styled.h2`
//     font-size: 26px;
//     font-weight: normal;
//     line-height: normal;
    
//     @media (max-width: 600px) {
//         font-size: 18px;
//     }
// `;

export const Image = styled.img`
    max-width: 100%;
    object-fit: cover;
    // display: block;
    height: auto;
    border-radius: 10px 0px 0px 10px;

    @media (max-width: 700px) {
        max-width: 100%;
        border-radius: 10px 10px 0px 0px;
    }
`;

export const ReminderChip = styled.div`
font-size: 1rem;
position: absolute;
top: 1em;
right: 1em;
font-size: 0.9rem;
font-weight: bold;
background-color: #FF7858;
min-width: 100px;
max-width: 250px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
padding: 0.30rem 0.8rem;
color: #fff;
border-radius: 100px;
text-align: center;
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
`;

export const DetailsWrapper = styled.div`
opacity: 0.5;
 font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 0.7rem;
    font-weight:bold;
}
`;

export const DetailItem = styled.div`
    display:flex;
    align-items: center; 
    padding: 0.2em 0.6em 0.2em 0.2em;
   
    .event-icon{
        margin-right: 0.4em;
        font-size: 1rem;
    }
`;

export const Note = styled.div`
    background-color: #FFF9C4;
    padding: 0.6em;
    margin-top: 0.5em;
    border-radius: 11px;
    font-size: 0.8rem;
`;