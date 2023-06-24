import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return (
   <div className= 'card'>
      {
         characters.map(({id,name,status,species,gender,origin,image}) => {
            return <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=>onClose(id)}
             ></Card>
         })
      }

   </div>)
}
